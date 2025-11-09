import type { EndpointResource } from '../index';

import { listChatsOperation } from './chats';

export const chatsResource: EndpointResource = {
	name: 'chats',
	displayName: 'Chats',
	description: 'Get the list of chats for an Account.',
	endpoint: '/{account}/chats',
	operations: [listChatsOperation],
};

import { listChatMediaGalleryOperation } from './media';

export const mediaResource: EndpointResource = {
	name: 'media',
	displayName: 'Media',
	description: 'List media files shared in a specific chat.',
	endpoint: '/{account}/chats/{chat_id}/media',
	operations: [listChatMediaGalleryOperation],
};

import { startTypingIndicatorOperation } from './typing';

export const typingResource: EndpointResource = {
	name: 'typing',
	displayName: 'Typing',
	description: 'Calling this endpoint will show the target fan a "Model is typing..." note in the chat for ~4 seconds. If you want to continue showing the indicator call this endpoint multiple times. Free - no credits charged.',
	endpoint: '/{account}/chats/{chat_id}/typing',
	operations: [startTypingIndicatorOperation],
};

import { muteChatNotificationsOperation } from './mute';

export const muteResource: EndpointResource = {
	name: 'mute',
	displayName: 'Mute',
	description: 'Mute notifications for a specific chat.',
	endpoint: '/{account}/chats/{chat_id}/mute',
	operations: [muteChatNotificationsOperation],
};

import { unmuteChatNotificationsOperation } from './unmute';

export const unmuteResource: EndpointResource = {
	name: 'unmute',
	displayName: 'Unmute',
	description: 'Unmute notifications for a specific chat.',
	endpoint: '/{account}/chats/{chat_id}/unmute',
	operations: [unmuteChatNotificationsOperation],
};

import { hideChatOperation } from './hide';

export const hideResource: EndpointResource = {
	name: 'hide',
	displayName: 'Hide',
	description: 'Hide a specific chat from the chat list. To unhide this chat, send a new message to the user.',
	endpoint: '/{account}/chats/{chat_id}/hide',
	operations: [hideChatOperation],
};

export const chatsResources: EndpointResource[] = [
	chatsResource,
	mediaResource,
	typingResource,
	muteResource,
	unmuteResource,
	hideResource
];
