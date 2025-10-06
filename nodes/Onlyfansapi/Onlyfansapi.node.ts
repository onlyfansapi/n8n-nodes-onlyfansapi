import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { accountDescription } from './resources/account';
import { apiKeysDescription } from './resources/apiKeys';
import { bankingDescription } from './resources/banking';
import { chargebacksDescription } from './resources/chargebacks';
import { chatMessagesDescription } from './resources/chatMessages';

export class Onlyfansapi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OnlyFans API',
		name: 'onlyfansapi',
		icon: 'file:onlyfansapi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with OnlyFans API',
		defaults: {
			name: 'OnlyFans API',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'onlyfansapiApi', required: true }],
		requestDefaults: {
			baseURL: 'https://app.onlyfansapi.com/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
			options: [
				{
					name: 'Account',
					value: 'account',
				},
				{
					name: 'API Key',
					value: 'apiKeys',
				},
				{
					name: 'Banking',
					value: 'banking',
				},
				{
					name: 'Chargeback',
					value: 'chargebacks',
				},
				{
					name: 'Chat Message',
					value: 'chatMessages',
				},
			],
			default: 'account',
		},
		...accountDescription,
		...apiKeysDescription,
		...bankingDescription,
		...chargebacksDescription,
		...chatMessagesDescription,
	],
	};
}
