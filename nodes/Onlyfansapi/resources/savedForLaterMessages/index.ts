import type { INodeProperties } from 'n8n-workflow';
import { savedForLaterMessagesDisableAutomaticMessagingDescription } from './disableAutomaticMessaging';
import { savedForLaterMessagesEnableAutomaticMessagingDescription } from './enableAutomaticMessaging';
import { savedForLaterMessagesGetAllDescription } from './getAll';
import { savedForLaterMessagesGetSettingsDescription } from './getSettings';

const showOnlyForSavedForLaterMessages = {
	resource: ['savedForLaterMessages'],
};

export const savedForLaterMessagesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSavedForLaterMessages,
		},
		options: [
			{
				name: 'Disable Automatic Messaging',
				value: 'disableAutomaticMessaging',
				action: 'Disable automatic messaging',
				description: 'Disable automatic messaging of Saved For Later messages',
				routing: {
					request: {
						method: 'PATCH',
						url: '={{$parameter.accountId}}/saved-for-later/messages/settings/disable-automatic-messaging',
					},
				},
			},
			{
				name: 'Enable Automatic Messaging',
				value: 'enableAutomaticMessaging',
				action: 'Enable automatic messaging',
				description: 'Enable or update automatic messaging of Saved For Later messages',
				routing: {
					request: {
						method: 'PATCH',
						url: '={{$parameter.accountId}}/saved-for-later/messages/settings/enable-or-update-automatic-messaging',
						body: {
							period: '={{$parameter.period}}',
						},
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List saved for later messages',
				description: 'List many messages that are marked as "Save For Later"',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/saved-for-later/messages',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
						},
					},
				},
			},
			{
				name: 'Get Settings',
				value: 'getSettings',
				action: 'Get message settings',
				description: 'Get the Saved For Later message settings',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/saved-for-later/messages/settings',
					},
				},
			},
		],
		default: 'getAll',
	},
	...savedForLaterMessagesDisableAutomaticMessagingDescription,
	...savedForLaterMessagesEnableAutomaticMessagingDescription,
	...savedForLaterMessagesGetAllDescription,
	...savedForLaterMessagesGetSettingsDescription,
];

