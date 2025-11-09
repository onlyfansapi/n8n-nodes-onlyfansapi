import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const searchUsersInNotificationsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The query to search for',
			name: 'query',
			type: 'string',
			default: 'User',
			required: true,
			description: 'The query to search for. Can be either a name or username.',
		},
];

export const searchUsersInNotificationsOperation = {
	name: 'searchUsersInNotifications',
	displayName: 'Search Users In Notifications',
	method: 'GET' as const,
	parameters: searchUsersInNotificationsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

