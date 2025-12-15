import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const calculateTotalTransactionsResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'The Start Date for the Period',
		name: 'start_date',
		type: 'string',
		default: '2025-01-01 00:00:00',
		required: true,
		description: 'The start date for the period. Keep empty to calculate everything.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when calculating total transactions',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'string',
				default: '',
				description: 'The end date for the period. Keep empty to calculate everything.',
			},
		],
	},
];

export const calculateTotalTransactionsOperation = {
	name: 'calculateTotalTransactions',
	displayName: 'Calculate Total Transactions',
	method: 'GET' as const,
	parameters: calculateTotalTransactionsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

