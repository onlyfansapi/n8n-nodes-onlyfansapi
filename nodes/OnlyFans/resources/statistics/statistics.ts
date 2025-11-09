import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getSubscriberStatisticsResource: INodeProperties[] = [
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
			description: 'The start date for the period. Keep empty to calculate everything.',
		},
		{
			displayName: 'The End Date for the Period',
			name: 'end_date',
			type: 'string',
			default: '2025-03-31 23:59:59',
			description: 'The end date for the period. Keep empty to calculate everything.',
		},
		{
			displayName: 'Filter the Subscriber Statistics (Default = Total)',
			name: 'type',
			type: 'string',
			default: 'total',
		},
];

export const getSubscriberStatisticsOperation = {
	name: 'getSubscriberStatistics',
	displayName: 'Get Subscriber Statistics',
	method: 'GET' as const,
	parameters: getSubscriberStatisticsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

