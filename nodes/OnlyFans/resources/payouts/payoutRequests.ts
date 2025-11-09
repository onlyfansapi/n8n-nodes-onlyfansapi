import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listPayoutRequestsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Number of Payout Requests to Return',
			name: 'limit',
			type: 'string',
			default: '10',
		},
		{
			displayName: 'Number of Payout Requests to Skip for Pagination',
			name: 'offset',
			type: 'string',
			default: '',
		},
];

export const listPayoutRequestsOperation = {
	name: 'listPayoutRequests',
	displayName: 'List Payout Requests',
	method: 'GET' as const,
	parameters: listPayoutRequestsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

