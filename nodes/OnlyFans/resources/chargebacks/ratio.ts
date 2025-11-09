import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const calculateChargebackRatioResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Start Date for the Chargeback Ratio',
			name: 'start_date',
			type: 'string',
			default: '2025-01-01 00:00:00',
			description: 'The start date for the chargeback ratio. Keep empty to get all.',
		},
		{
			displayName: 'The End Date for the Chargeback Ratio',
			name: 'end_date',
			type: 'string',
			default: '2025-03-31 23:59:59',
			description: 'The end date for the chargeback ratio. Keep empty to get all.',
		},
];

export const calculateChargebackRatioOperation = {
	name: 'calculateChargebackRatio',
	displayName: 'Calculate Chargeback Ratio',
	method: 'GET' as const,
	parameters: calculateChargebackRatioResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

