import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getSubscriberMetricsResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'The Start Date for the Metrics',
		name: 'start_date',
		type: 'string',
		default: '2025-01-01 00:00:00',
		required: true,
		description: 'The start date for the metrics',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when retrieving subscriber metrics',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'string',
				default: '',
				description: 'The end date for the metrics',
			},
			{
				displayName: 'Detailed',
				name: 'detailed',
				type: 'boolean',
				default: false,
				description: 'Whether to include paid and free fan metrics; may slow responses or time out for large time frames',
			},
		],
	},
];

export const getSubscriberMetricsOperation = {
	name: 'getSubscriberMetrics',
	displayName: 'Get Subscriber Metrics',
	method: 'GET' as const,
	parameters: getSubscriberMetricsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

