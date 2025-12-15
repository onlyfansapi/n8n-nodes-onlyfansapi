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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when retrieving subscriber statistics',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'string',
				default: '',
				description: 'The start date for the period. Keep empty to calculate everything.',
			},
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'string',
				default: '',
				description: 'The end date for the period. Keep empty to calculate everything.',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: 'total',
				description: 'Filter the subscriber statistics (default total)',
			},
		],
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

