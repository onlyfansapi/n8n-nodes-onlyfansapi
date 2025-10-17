import type { INodeProperties } from 'n8n-workflow';
import { chatsGetAllDescription } from './getAll';
import { chatsListChatMediaGalleryDescription } from './listChatMediaGallery';
import { chatsMuteChatNotificationsDescription } from './muteChatNotifications';
import { chatsStartTypingIndicatorDescription } from './startTypingIndicator';
import { chatsUnmuteChatNotificationsDescription } from './unmuteChatNotifications';

const showOnlyForChats = {
	resource: ['chats'],
};

export const chatsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChats,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List chats',
				description: 'Get the list of chats for an Account',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/chats',
						qs: {
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
							skip_users: '{{.options.skip_users}}',
							order: '{{.options.order}}',
							filter: '{{.options.filter}}',
							query: '{{.options.query}}',
						},
					},
				},
			},
			{
				name: 'List Chat Media (Gallery)',
				value: 'listChatMediaGallery',
				action: 'List chat media gallery',
				description: 'List media files shared in a specific chat',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/media',
						qs: {
							type: '{{.options.type}}',
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
							skip_users: '{{.options.skip_users}}',
						},
					},
				},
			},
			{
				name: 'Mute Chat Notifications',
				value: 'muteChatNotifications',
				action: 'Mute chat notifications',
				description: 'Mute notifications for a specific chat',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/notifications/mute',
					},
				},
			},
			{
				name: 'Start Typing Indicator',
				value: 'startTypingIndicator',
				action: 'Start typing indicator',
				description: 'Start the typing indicator for a specific chat',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/typing',
					},
				},
			},
			{
				name: 'Unmute Chat Notifications',
				value: 'unmuteChatNotifications',
				action: 'Unmute chat notifications',
				description: 'Unmute notifications for a specific chat',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/notifications/mute',
					},
				},
			},
		],
		default: 'getAll',
	},
	...chatsGetAllDescription,
	...chatsListChatMediaGalleryDescription,
	...chatsMuteChatNotificationsDescription,
	...chatsStartTypingIndicatorDescription,
	...chatsUnmuteChatNotificationsDescription,
];
