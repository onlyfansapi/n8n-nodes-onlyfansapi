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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when listing queue items',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Publish Date Start',
				name: 'publishDateStart',
				type: 'string',
				default: '',
				description: 'Earliest publish date to return (must be at least today)',
			},
			{
				displayName: 'Publish Date End',
				name: 'publishDateEnd',
				type: 'string',
				default: '',
				description: 'Latest publish date to return',
			},
			{
				displayName: 'Timezone',
				name: 'timezone',
				type: 'string',
				default: '',
				description: 'Timezone of the provided dates (see PHP timezone list)',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
			},
		],
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

