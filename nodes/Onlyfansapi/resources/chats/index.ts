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
						url: '={{$parameter.accountId}}/chats',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							skip_users: '={{$parameter.options.skip_users}}',
							order: '={{$parameter.options.order}}',
							filter: '={{$parameter.options.filter}}',
							query: '={{$parameter.options.query}}',
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
						url: '={{$parameter.accountId}}/chats/{{$parameter.chatId}}/media',
						qs: {
							type: '={{$parameter.options.type}}',
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							skip_users: '={{$parameter.options.skip_users}}',
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
						url: '={{$parameter.accountId}}/chats/{{$parameter.chatId}}/notifications/mute',
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
						url: '={{$parameter.accountId}}/chats/{{$parameter.chatId}}/typing',
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
						url: '={{$parameter.accountId}}/chats/{{$parameter.chatId}}/notifications/mute',
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
