import { 
	NodeConnectionTypes, 
	type INodeType, 
	type INodeTypeDescription,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeProperties,
	NodeOperationError
} from 'n8n-workflow';
import { resources, getResourceOptions, getResourceByName, getOperation } from './resources';
import { executeResourceOperation } from './shared/utils';

export class OnlyFans implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OnlyFans API',
		name: 'onlyFans',
		icon: { light: 'file:../../icons/onlyfansapi.svg', dark: 'file:../../icons/onlyfansapi.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["resource"]}}: {{$parameter["operation"]}}',
		description: 'Consume the OnlyFans API',
		defaults: {
			name: 'Onlyfans API',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'onlyFansApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://app.onlyfansapi.com/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: getResourceOptions(),
				default: '',
				required: true,
			},
			...this.getResourceDescriptions(),
		],
	};

	getResourceDescriptions(): INodeProperties[] {
		const properties: INodeProperties[] = [];
		
		for (const resource of resources) {
			// Add operation field for each resource
			properties.push({
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				default: '',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [resource.name],
					},
				},
				options: resource.operations.map(operation => ({
					name: operation.displayName,
					value: operation.name,
				})),
				required: true,
			});
			
			// Add all operation parameters for this resource
			for (const operation of resource.operations) {
				for (const param of operation.parameters) {
					properties.push({
						...param,
						displayOptions: {
							show: {
								resource: [resource.name],
								operation: [operation.name],
							},
						},
					});
				}
			}
		}
		
		return properties;
	}

async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const resourceName = this.getNodeParameter('resource', i) as string;
				const operationName = this.getNodeParameter('operation', i) as string;
				
				const resource = getResourceByName(resourceName);
				if (!resource) {
					throw new NodeOperationError(this.getNode(), `Unknown resource: ${resourceName}`);
				}

				const operation = getOperation(resourceName, operationName);
				if (!operation) {
					throw new NodeOperationError(this.getNode(), `Unknown operation: ${operationName} for resource: ${resourceName}`);
				}

				const results = await executeResourceOperation.call(this, resource, operation, i);
				for (const result of results) {
					returnData.push({
						json: result,
						pairedItem: {
							item: i,
						},
					});
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: (error as Error).message,
						},
						pairedItem: {
							item: i,
						},
					});
				} else {
					throw error;
				}
			}
		}

		return [returnData];
	}
}
