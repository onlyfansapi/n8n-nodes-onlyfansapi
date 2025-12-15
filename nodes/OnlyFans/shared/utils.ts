import type { IExecuteFunctions, IDataObject, IHttpRequestOptions } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import type { Operation, EndpointResource } from '../resources';

export async function executeResourceOperation(
	this: IExecuteFunctions,
	resource: EndpointResource,
	operation: Operation,
	itemIndex: number,
): Promise<IDataObject[]> {
	const { method, parameters } = operation;
	const endpointPath = operation.endpoint ?? resource.endpoint;

	if (!endpointPath) {
		throw new NodeOperationError(this.getNode(), `No endpoint configured for operation "${operation.name}".`);
	}
	
	// Get parameters from the node
	const params: IDataObject = {};
	const pathParams: string[] = [];

	for (const param of parameters) {
		// Collections contain optional, nested fields that should be flattened
		if (param.type === 'collection') {
			const collectionValues = this.getNodeParameter(param.name, itemIndex, {}) as IDataObject;
			for (const [key, value] of Object.entries(collectionValues)) {
				if (value !== undefined && value !== '') {
					params[key] = value;
					if (endpointPath.includes(`{${key}}`)) {
						pathParams.push(key);
					}
				}
			}
			continue;
		}

		const value = this.getNodeParameter(param.name, itemIndex);
		if (value !== undefined && value !== '') {
			params[param.name] = value;
			// Check if this is a path parameter by checking if endpoint contains {paramName}
			if (endpointPath.includes(`{${param.name}}`)) {
				pathParams.push(param.name);
			}
		}
	}

	// Build URL - replace placeholders like {accountId}
	let url = endpointPath;
	for (const pathParam of pathParams) {
		const value = params[pathParam];
		if (typeof value === 'string' || typeof value === 'number') {
			url = url.replace(`{${pathParam}}`, String(value));
		}
	}

	// Separate query parameters from path parameters and request body
	const queryParams: IDataObject = {};
	const bodyParams: IDataObject = {};
	
	// For POST/PUT/PATCH, parameters are typically body parameters unless they're in the path
	if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
		for (const [key, value] of Object.entries(params)) {
			if (!pathParams.includes(key)) {
				bodyParams[key] = value;
			}
		}
	} else {
		// For GET/DELETE, non-path parameters are query parameters
		for (const [key, value] of Object.entries(params)) {
			if (!pathParams.includes(key)) {
				queryParams[key] = value;
			}
		}
	}

	// Make the API request
	const requestOptions: IHttpRequestOptions = {
		method,
		url: `https://app.onlyfansapi.com/api${url}`,
		json: true,
	};

	if (Object.keys(queryParams).length > 0) {
		requestOptions.qs = queryParams;
	}

	if (Object.keys(bodyParams).length > 0 && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
		requestOptions.body = bodyParams;
	}

	const responseData = await this.helpers.httpRequestWithAuthentication.call(
		this,
		'onlyFansApi',
		requestOptions,
	);

	// Process response using the operation's processor
	return operation.processResponse(responseData);
}
