import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const showPostStatisticsResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'The Post ID',
		name: 'post_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The post ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when retrieving post statistics',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'With Historical Data',
				name: 'with_historical_data',
				type: 'boolean',
				default: true,
				description: 'Whether to include historical data for a post',
			},
		],
	},
];

export const showPostStatisticsOperation = {
	name: 'showPostStatistics',
	displayName: 'Show Post Statistics',
	method: 'GET' as const,
	parameters: showPostStatisticsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

