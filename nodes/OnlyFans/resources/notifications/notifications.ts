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
			displayName: 'Filter Notifications by a Specific Type',
			name: 'type',
			type: 'string',
			default: 'mentions',
		},
		{
			displayName: 'The Number of Notifications',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
		},
		{
			displayName: 'Used for Pagination',
			name: 'from_id',
			type: 'number',
			default: 123,
			description: 'Used for pagination. This value should be the ID of the previous response\'s last notification.',
		},
		{
			displayName: 'Whether to Skip User Details',
			name: 'skip_users',
			type: 'string',
			default: 'all',
			description: 'Whether to skip user details. Default `all`.',
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

