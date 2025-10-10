import type { INodeProperties } from 'n8n-workflow';

export { accountIdParameter } from '../sharedParameters';

export const listIdParameter: INodeProperties = {
	displayName: 'List ID',
	name: 'listId',
	type: 'string',
	required: true,
	default: '',
	description: 'The ID of the list',
};
