import type { INodeProperties } from 'n8n-workflow';

export { accountIdParameter } from '../sharedParameters';

export const postIdParameter: INodeProperties = {
	displayName: 'Post ID',
	name: 'postId',
	type: 'string',
	required: true,
	default: '',
	description: 'The ID of the post',
};

export const commentIdParameter: INodeProperties = {
	displayName: 'Comment ID',
	name: 'commentId',
	type: 'string',
	required: true,
	default: '',
	description: 'The ID of the comment',
};

