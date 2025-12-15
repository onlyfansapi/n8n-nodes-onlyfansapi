import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listTransactionsEarningsResource: INodeProperties[] = [
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
		description: 'Optional parameters when listing payout transactions',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'string',
				default: '10',
				description: 'Number of transactions to return',
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

export const listTransactionsEarningsOperation = {
	name: 'listTransactionsEarnings',
	displayName: 'List Transactions (Earnings)',
	method: 'GET' as const,
	parameters: listTransactionsEarningsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

