import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const likePostCommentResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Post ID',
			name: 'post_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The post ID',
		},
		{
			displayName: 'The Comment ID',
			name: 'comment_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The comment ID',
		},
];

export const likePostCommentOperation = {
	name: 'likePostComment',
	displayName: 'Like Post Comment',
	method: 'POST' as const,
	parameters: likePostCommentResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const unlikePostCommentResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Post ID',
			name: 'post_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The post ID',
		},
		{
			displayName: 'The Comment ID',
			name: 'comment_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The comment ID',
		},
];

export const unlikePostCommentOperation = {
	name: 'unlikePostComment',
	displayName: 'Unlike Post Comment',
	method: 'DELETE' as const,
	parameters: unlikePostCommentResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

