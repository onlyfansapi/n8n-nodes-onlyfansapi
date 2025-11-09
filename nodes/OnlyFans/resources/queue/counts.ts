import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const countQueueItemsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Earliest Publish Date to Count From (Must Be at Least Today)',
			name: 'publishDateStart',
			type: 'string',
			default: '2025-01-01',
			required: true,
		},
		{
			displayName: 'Latest Publish Date to Count To',
			name: 'publishDateEnd',
			type: 'string',
			default: '2025-01-01',
			required: true,
		},
		{
			displayName: 'Time Timezone of the Provided Dates',
			name: 'timezone',
			type: 'string',
			default: 'Europe/Prague',
			required: true,
			description: 'Time timezone of the provided dates. [View available timezone values](https://www.php.net/manual/en/timezones.php).',
		},
];

export const countQueueItemsOperation = {
	name: 'countQueueItems',
	displayName: 'Count Queue Items',
	method: 'GET' as const,
	parameters: countQueueItemsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

