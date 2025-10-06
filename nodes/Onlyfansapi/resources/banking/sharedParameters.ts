import type { INodeProperties } from 'n8n-workflow';

export const accountIdParameter: INodeProperties = {
	displayName: 'Account ID',
	name: 'accountId',
	type: 'string',
	required: true,
	default: '',
};
