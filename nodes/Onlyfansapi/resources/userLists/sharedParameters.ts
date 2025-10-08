import type { INodeProperties } from 'n8n-workflow';

export { accountIdParameter } from '../sharedParameters';

export const userListIdParameter: INodeProperties = {
	displayName: 'User List ID',
	name: 'userListId',
	type: 'string',
	required: true,
	default: '',
	description: 'OnlyFans User List ID',
};
