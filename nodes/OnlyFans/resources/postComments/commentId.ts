import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const deletePostCommentResource: INodeProperties[] = [
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

export const deletePostCommentOperation = {
	name: 'deletePostComment',
	displayName: 'Delete Post Comment',
	method: 'DELETE' as const,
	parameters: deletePostCommentResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

