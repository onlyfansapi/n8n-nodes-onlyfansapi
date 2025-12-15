import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listPostCommentsResource: INodeProperties[] = [
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when listing post comments',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of comments to skip for pagination',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: 'desc',
				description: 'Sort the returned comments (default desc)',
			},
		],
	},
];

export const listPostCommentsOperation = {
	name: 'listPostComments',
	displayName: 'List Post Comments',
	method: 'GET' as const,
	parameters: listPostCommentsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const createPostCommentResource: INodeProperties[] = [
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
			displayName: 'The Text of the Comment',
			name: 'text',
			type: 'string',
			default: 'This is a comment.',
			required: true,
			description: 'The text of the comment',
		},
		{
			displayName: 'The ID of the Comment to Which This Comment Is a Reply',
			name: 'answerTo',
			type: 'number',
			default: 123,
			description: 'The ID of the comment to which this comment is a reply',
		},
		{
			displayName: 'The ID of the Giphy to Include in the Comment',
			name: 'giphyId',
			type: 'string',
			default: 'giphy123',
			description: 'The ID of the Giphy to include in the comment',
		},
];

export const createPostCommentOperation = {
	name: 'createPostComment',
	displayName: 'Create Post Comment',
	method: 'POST' as const,
	parameters: createPostCommentResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

