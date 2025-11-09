import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listTransactionsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Number of Transactions to Return',
			name: 'limit',
			type: 'string',
			default: '10',
			description: 'The number of transactions to return. Recommended: `10`.',
		},
		{
			displayName: 'The Start Date for Transactions List',
			name: 'startDate',
			type: 'string',
			default: '2025-01-01 00:00:00, -30days',
			description: 'The start date for transactions list. Default: `-30days`.',
		},
		{
			displayName: 'The Marker Used for Pagination',
			name: 'marker',
			type: 'string',
			default: '1739155047',
			description: 'The marker used for pagination. Default: `null`.',
		},
];

export const listTransactionsOperation = {
	name: 'listTransactions',
	displayName: 'List Transactions',
	method: 'GET' as const,
	parameters: listTransactionsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

