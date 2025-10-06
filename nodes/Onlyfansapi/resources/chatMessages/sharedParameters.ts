import type { INodeProperties } from 'n8n-workflow';

export const accountIdParameter: INodeProperties = {
	displayName: 'Account ID',
	name: 'accountId',
	type: 'string',
	required: true,
	default: '',
};

export const chatIdParameter: INodeProperties = {
	displayName: 'Chat ID',
	name: 'chatId',
	type: 'string',
	required: true,
	default: '',
	description: 'The ID of the chat, usually a fan\'s OnlyFans User ID',
};

export const messageIdParameter: INodeProperties = {
	displayName: 'Message ID',
	name: 'messageId',
	type: 'string',
	required: true,
	default: '',
};
