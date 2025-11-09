import type { EndpointResource } from '../index';

import { pinMessageOperation } from './pin';

export const pinResource: EndpointResource = {
	name: 'pin',
	displayName: 'Pin',
	description: 'Pin a message from a chat.',
	endpoint: '/{account}/chats/{chat_id}/messages/{message_id}/pin',
	operations: [pinMessageOperation],
};

import { unpinMessageOperation } from './unpin';

export const unpinResource: EndpointResource = {
	name: 'unpin',
	displayName: 'Unpin',
	description: 'Unpin a message from a chat.',
	endpoint: '/{account}/chats/{chat_id}/messages/{message_id}/unpin',
	operations: [unpinMessageOperation],
};

import { likeMessageOperation } from './like';

export const likeResource: EndpointResource = {
	name: 'like',
	displayName: 'Like',
	description: 'Like a chat message.',
	endpoint: '/{account}/chats/{chat_id}/messages/{message_id}/like',
	operations: [likeMessageOperation],
};

import { unlikeMessageOperation } from './unlike';

export const unlikeResource: EndpointResource = {
	name: 'unlike',
	displayName: 'Unlike',
	description: 'Unlike a chat message.',
	endpoint: '/{account}/chats/{chat_id}/messages/{message_id}/unlike',
	operations: [unlikeMessageOperation],
};

import { searchChatMessagesOperation } from './search';

export const searchResource: EndpointResource = {
	name: 'search',
	displayName: 'Search',
	description: 'Search messages in a specific chat. Returns a list of message IDs matching the search query.',
	endpoint: '/{account}/chats/{chat_id}/messages/search',
	operations: [searchChatMessagesOperation],
};

import { listChatMessagesOperation, sendMessageOperation  } from './messages';

export const messagesResource: EndpointResource = {
	name: 'messages',
	displayName: 'Messages',
	description: 'Get messages from a specific chat.',
	endpoint: '/{account}/chats/{chat_id}/messages',
	operations: [listChatMessagesOperation, sendMessageOperation],
};

import { deleteMessageOperation } from './messageId';

export const messageIdResource: EndpointResource = {
	name: 'messageId',
	displayName: '{Message Id}',
	description: 'Delete a message from a chat. Please note that ONLY messages sent less than 24 hours ago can be deleted.',
	endpoint: '/{account}/chats/{chat_id}/messages/{message_id}',
	operations: [deleteMessageOperation],
};

export const chatMessagesResources: EndpointResource[] = [
	pinResource,
	unpinResource,
	likeResource,
	unlikeResource,
	searchResource,
	messagesResource,
	messageIdResource
];
