import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listAvailablePayoutSystemsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
];

export const listAvailablePayoutSystemsOperation = {
	name: 'listAvailablePayoutSystems',
	displayName: 'List Available Payout Systems',
	method: 'GET' as const,
	parameters: listAvailablePayoutSystemsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

