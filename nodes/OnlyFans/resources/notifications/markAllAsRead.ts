import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const markAllNotificationsAsReadResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
];

export const markAllNotificationsAsReadOperation = {
	name: 'markAllNotificationsAsRead',
	displayName: 'Mark All Notifications As Read',
	method: 'POST' as const,
	parameters: markAllNotificationsAsReadResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

