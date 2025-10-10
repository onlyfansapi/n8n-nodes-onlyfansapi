export { accountIdParameter } from '../sharedParameters';

import type { INodeProperties } from 'n8n-workflow';

export const postIdParameter: INodeProperties = {
	displayName: 'Post ID',
	name: 'postId',
	type: 'string',
	required: true,
	default: '',
	description: 'The ID of the post',
};

