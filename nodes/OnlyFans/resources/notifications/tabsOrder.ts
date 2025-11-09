import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getNotificationTabsOrderResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
];

export const getNotificationTabsOrderOperation = {
	name: 'getNotificationTabsOrder',
	displayName: 'Get Notification Tabs Order',
	method: 'GET' as const,
	parameters: getNotificationTabsOrderResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const updateNotificationTabsOrderResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Array of Tab Keys',
			name: 'tabs',
			type: 'string',
			default: 'all,subscriptions,onlyfans,purchases,tips,tags,comments,mentions,likes,promotions',
			required: true,
			description: 'Array of tab keys. Must include exactly these: all, subscriptions, onlyfans, purchases, tips, tags, comments, mentions, likes, promotions.',
		},
];

export const updateNotificationTabsOrderOperation = {
	name: 'updateNotificationTabsOrder',
	displayName: 'Update Notification Tabs Order',
	method: 'PUT' as const,
	parameters: updateNotificationTabsOrderResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

