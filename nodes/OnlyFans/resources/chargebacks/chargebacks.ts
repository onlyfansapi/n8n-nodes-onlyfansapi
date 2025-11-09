import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listChargebacksResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Start Date for the Chargebacks',
			name: 'start_date',
			type: 'string',
			default: '2025-01-01 00:00:00',
			description: 'The start date for the chargebacks. Keep empty to get all.',
		},
		{
			displayName: 'The End Date for the Chargebacks',
			name: 'end_date',
			type: 'string',
			default: '2025-03-31 23:59:59',
			description: 'The end date for the chargebacks. Keep empty to get all.',
		},
		{
			displayName: 'Number of Chargebacks to Return (1-100)',
			name: 'limit',
			type: 'string',
			default: '50',
			description: 'Number of chargebacks to return (1-100). Default = 10.',
		},
		{
			displayName: 'Number of Chargebacks to Skip, Used for Pagination',
			name: 'offset',
			type: 'string',
			default: '',
		},
];

export const listChargebacksOperation = {
	name: 'listChargebacks',
	displayName: 'List Chargebacks',
	method: 'GET' as const,
	parameters: listChargebacksResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

