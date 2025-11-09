import type { EndpointResource } from '../index';

import { listNotificationsOperation } from './notifications';

export const notificationsResource: EndpointResource = {
	name: 'notifications',
	displayName: 'Notifications',
	description: 'List all notifications for the account',
	endpoint: '/{account}/notifications',
	operations: [listNotificationsOperation],
};

import { searchUsersInNotificationsOperation } from './searchUsers';

export const searchUsersResource: EndpointResource = {
	name: 'searchUsers',
	displayName: 'Search-Users',
	description: 'Search users that have appeared in your notifications',
	endpoint: '/{account}/notifications/search-users',
	operations: [searchUsersInNotificationsOperation],
};

import { getNotificationCountsOperation } from './counts';

export const countsResource: EndpointResource = {
	name: 'counts',
	displayName: 'Counts',
	description: 'Get a quick overview of all unread notification types',
	endpoint: '/{account}/notifications/counts',
	operations: [getNotificationCountsOperation],
};

import { markAllNotificationsAsReadOperation } from './markAllAsRead';

export const markAllAsReadResource: EndpointResource = {
	name: 'markAllAsRead',
	displayName: 'Mark-All-As-Read',
	description: 'Mark all notifications of this account as read',
	endpoint: '/{account}/notifications/mark-all-as-read',
	operations: [markAllNotificationsAsReadOperation],
};

import { getNotificationTabsOrderOperation, updateNotificationTabsOrderOperation  } from './tabsOrder';

export const tabsOrderResource: EndpointResource = {
	name: 'tabsOrder',
	displayName: 'Tabs-Order',
	description: 'Get the order of an account\'s notification tabs as displayed on the OnlyFans notifications page',
	endpoint: '/{account}/notifications/tabs-order',
	operations: [getNotificationTabsOrderOperation, updateNotificationTabsOrderOperation],
};

export const notificationsResources: EndpointResource[] = [
	notificationsResource,
	searchUsersResource,
	countsResource,
	markAllAsReadResource,
	tabsOrderResource
];
