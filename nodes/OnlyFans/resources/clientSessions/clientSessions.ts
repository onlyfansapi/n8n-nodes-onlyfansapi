import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const createClientSessionResource: INodeProperties[] = [
		{
			displayName: 'Display Name of the Account Visible in Your OnlyFansAPI Console Dashboard',
			name: 'display_name',
			type: 'string',
			default: 'STRLCxGLVC Agency / Model: Stella',
			required: true,
		},
		{
			displayName: 'Your Internal Reference ID for the Connected Account',
			name: 'client_reference_id',
			type: 'string',
			default: 'my_crm_model_12345',
		},
		{
			displayName: 'Proxy Country',
			name: 'proxy_country',
			type: 'string',
			default: 'uk',
		},
];

export const createClientSessionOperation = {
	name: 'createClientSession',
	displayName: 'Create Client Session',
	method: 'POST' as const,
	parameters: createClientSessionResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

