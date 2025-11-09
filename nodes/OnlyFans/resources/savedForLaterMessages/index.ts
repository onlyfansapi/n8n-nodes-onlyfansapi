import type { EndpointResource } from '../index';

import { listSavedForLaterMessagesOperation } from './messages';

export const messagesResource: EndpointResource = {
	name: 'messages',
	displayName: 'Messages',
	description: 'List all messages that are marked as "Save For Later".',
	endpoint: '/{account}/saved-for-later/messages',
	operations: [listSavedForLaterMessagesOperation],
};

import { getMessageSettingsOperation } from './settings';

export const settingsResource: EndpointResource = {
	name: 'settings',
	displayName: 'Settings',
	description: 'Get the Saved For Later message settings.',
	endpoint: '/{account}/saved-for-later/messages/settings',
	operations: [getMessageSettingsOperation],
};

import { enableUpdateAutomaticMessagingOperation } from './enableOrUpdateAutomaticMessaging';

export const enableOrUpdateAutomaticMessagingResource: EndpointResource = {
	name: 'enableOrUpdateAutomaticMessaging',
	displayName: 'Enable-Or-Update-Automatic-Messaging',
	description: 'Enable or update automatic messaging of Saved For Later messages.',
	endpoint: '/{account}/saved-for-later/messages/settings/enable-or-update-automatic-messaging',
	operations: [enableUpdateAutomaticMessagingOperation],
};

import { disableAutomaticMessagingOperation } from './disableAutomaticMessaging';

export const disableAutomaticMessagingResource: EndpointResource = {
	name: 'disableAutomaticMessaging',
	displayName: 'Disable-Automatic-Messaging',
	description: 'Disable automatic messaging of Saved For Later messages.',
	endpoint: '/{account}/saved-for-later/messages/settings/disable-automatic-messaging',
	operations: [disableAutomaticMessagingOperation],
};

export const savedForLaterMessagesResources: EndpointResource[] = [
	messagesResource,
	settingsResource,
	enableOrUpdateAutomaticMessagingResource,
	disableAutomaticMessagingResource
];
