import type { INodeProperties } from 'n8n-workflow';
import { chatMessagesDeleteDescription } from './delete';
import { chatMessagesGetAllDescription } from './getAll';
import { chatMessagesLikeDescription } from './like';
import { chatMessagesPinDescription } from './pin';
import { chatMessagesSendDescription } from './send';
import { chatMessagesUnlikeDescription } from './unlike';
import { chatMessagesUnpinDescription } from './unpin';

const showOnlyForChatMessages = {
	resource: ['chatMessages'],
};

export const chatMessagesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChatMessages,
		},
		options: [
			{
				name: 'Delete Message',
				value: 'delete',
				action: 'Delete message',
				description: 'Delete a message from a chat. Please note that ONLY messages sent less than 24 hours ago can be deleted.',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/messages/{{$parameter.messageId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List chat messages',
				description: 'Get messages from a specific chat',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/messages',
						qs: {
							id: '{{.options.id}}',
							order: '{{.options.order}}',
							skip_users: '{{.options.skip_users}}',
						},
					},
				},
			},
			{
				name: 'Like Message',
				value: 'like',
				action: 'Like message',
				description: 'Like a chat message',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/messages/{{$parameter.messageId}}/like',
					},
				},
			},
			{
				name: 'Pin Message',
				value: 'pin',
				action: 'Pin message',
				description: 'Pin a message from a chat',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/messages/{{$parameter.messageId}}/pin',
					},
				},
			},
			{
				name: 'Send Message',
				value: 'send',
				action: 'Send message',
				description: 'Send a new message to a chat',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/messages',
						body: {
							text: '{{.text}}',
						},
					},
				},
			},
			{
				name: 'Unlike Message',
				value: 'unlike',
				action: 'Unlike message',
				description: 'Unlike a chat message',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/messages/{{$parameter.messageId}}/like',
					},
				},
			},
			{
				name: 'Unpin Message',
				value: 'unpin',
				action: 'Unpin message',
				description: 'Unpin a message from a chat',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/chats/{{$parameter.chatId}}/messages/{{$parameter.messageId}}/pin',
					},
				},
			},
		],
		default: 'getAll',
	},
	...chatMessagesDeleteDescription,
	...chatMessagesGetAllDescription,
	...chatMessagesLikeDescription,
	...chatMessagesPinDescription,
	...chatMessagesSendDescription,
	...chatMessagesUnlikeDescription,
	...chatMessagesUnpinDescription,
];
