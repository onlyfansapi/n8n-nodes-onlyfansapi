import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';
import { companyDescription } from './resources/company';

export class Onlyfansapi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OnlyFans API',
		name: 'onlyfansapi',
		icon: { light: 'file:onlyfansapi.svg', dark: 'file:onlyfansapi.dark.svg' },
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
						name: 'User',
						value: 'user',
					},
					{
						name: 'Company',
						value: 'company',
					},
				],
				default: 'user',
			},
			...userDescription,
			...companyDescription,
		],
	};
}
