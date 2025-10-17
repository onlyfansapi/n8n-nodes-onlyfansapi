import type { INodeProperties } from 'n8n-workflow';
import { notificationsGetAllDescription } from './getAll';
import { notificationsGetNotificationCountsDescription } from './getNotificationCounts';
import { notificationsGetNotificationTabsOrderDescription } from './getNotificationTabsOrder';
import { notificationsMarkAllNotificationsAsReadDescription } from './markAllNotificationsAsRead';
import { notificationsSearchUsersInNotificationsDescription } from './searchUsersInNotifications';
import { notificationsUpdateNotificationTabsOrderDescription } from './updateNotificationTabsOrder';

const showOnlyForNotifications = {
	resource: ['notifications'],
};

export const notificationsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForNotifications,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List notifications',
				description: 'List many notifications for the account',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/notifications',
						qs: {
							type: '={{$parameter.options.type}}',
							limit: '={{$parameter.options.limit}}',
							from_id: '={{$parameter.options.from_id}}',
							skip_users: '={{$parameter.options.skip_users}}',
						},
					},
				},
			},
			{
				name: 'Get Notification Counts',
				value: 'getNotificationCounts',
				action: 'Get notification counts',
				description: 'Get a quick overview of all unread notification types',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/notifications/counts',
					},
				},
			},
			{
				name: 'Get Notification Tabs Order',
				value: 'getNotificationTabsOrder',
				action: 'Get notification tabs order',
				description: 'Get the order of an account\'s notification tabs as displayed on the OnlyFans notifications page',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/notifications/tabs-order',
					},
				},
			},
			{
				name: 'Mark All Notifications As Read',
				value: 'markAllNotificationsAsRead',
				action: 'Mark all notifications as read',
				description: 'Mark all notifications of this account as read',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/notifications/mark-all-as-read',
					},
				},
			},
			{
				name: 'Search Users In Notifications',
				value: 'searchUsersInNotifications',
				action: 'Search users in notifications',
				description: 'Search users that have appeared in your notifications',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/notifications/search-users',
						qs: {
							query: '={{$parameter.query}}',
						},
					},
				},
			},
			{
				name: 'Update Notification Tabs Order',
				value: 'updateNotificationTabsOrder',
				action: 'Update notification tabs order',
				description: 'Update the order of an account\'s notification tabs as displayed on the OnlyFans notifications page',
				routing: {
					request: {
						method: 'PUT',
						url: '={{$parameter.accountId}}/notifications/tabs-order',
						body: {
							order: '={{$parameter.order}}',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...notificationsGetAllDescription,
	...notificationsGetNotificationCountsDescription,
	...notificationsGetNotificationTabsOrderDescription,
	...notificationsMarkAllNotificationsAsReadDescription,
	...notificationsSearchUsersInNotificationsDescription,
	...notificationsUpdateNotificationTabsOrderDescription,
];
