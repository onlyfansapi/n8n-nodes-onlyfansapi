import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listQueueItemsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Earliest Publish Date to Return (Must Be at Least Today)',
			name: 'publishDateStart',
			type: 'string',
			default: '2025-01-01',
			required: true,
		},
		{
			displayName: 'Latest Publish Date to Return',
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
		{
			displayName: 'Maximum Number of Queue Items to Return (Default = 20)',
			name: 'limit',
			type: 'number',
			description: 'Max number of results to return',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			required: true,
		},
];

export const listQueueItemsOperation = {
	name: 'listQueueItems',
	displayName: 'List Queue Items',
	method: 'GET' as const,
	parameters: listQueueItemsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

