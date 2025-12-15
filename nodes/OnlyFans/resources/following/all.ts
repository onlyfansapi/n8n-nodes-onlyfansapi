import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listAllFollowingsResource: INodeProperties[] = [
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
		description: 'Optional filters when listing all followings',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Pagination offset, must be at least 0',
			},
			{
				displayName: 'Online Status',
				name: 'filter.online',
				type: 'number',
				default: 1,
				description: 'Filter by online status (1 for online, 0 for offline, null for all)',
			},
			{
				displayName: 'Paid Status',
				name: 'filter.paid',
				type: 'number',
				default: 1,
				description: 'Filter by paid status (1 for paid, 0 for free, null for all)',
			},
		],
	},
];

export const listAllFollowingsOperation = {
	name: 'listAllFollowings',
	displayName: 'List All Followings',
	method: 'GET' as const,
	parameters: listAllFollowingsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

