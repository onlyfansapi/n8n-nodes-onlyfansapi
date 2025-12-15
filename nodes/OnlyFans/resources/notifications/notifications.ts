import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listNotificationsResource: INodeProperties[] = [
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
		description: 'Optional parameters when listing notifications',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: 'mentions',
				description: 'Filter notifications by a specific type',
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
				displayName: 'From ID',
				name: 'from_id',
				type: 'number',
				default: 0,
				description: 'Used for pagination; set to the last notification ID from the previous response',
			},
			{
				displayName: 'Skip Users',
				name: 'skip_users',
				type: 'string',
				default: 'all',
				description: 'Whether to skip user details. Default all.',
			},
		],
	},
];

export const listNotificationsOperation = {
	name: 'listNotifications',
	displayName: 'List Notifications',
	method: 'GET' as const,
	parameters: listNotificationsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

