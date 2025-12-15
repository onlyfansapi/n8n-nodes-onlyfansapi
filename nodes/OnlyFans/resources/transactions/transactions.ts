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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when listing transactions',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'string',
				default: '10',
				description: 'The number of transactions to return. Recommended 10.',
			},
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'string',
				default: '',
				description: 'The start date for the transactions list. Default -30days.',
			},
			{
				displayName: 'Marker',
				name: 'marker',
				type: 'string',
				default: '',
				description: 'Marker used for pagination. Default null.',
			},
		],
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

