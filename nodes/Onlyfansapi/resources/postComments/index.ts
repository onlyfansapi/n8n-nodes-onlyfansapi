import type { INodeProperties } from 'n8n-workflow';
import { postCommentsCreateDescription } from './create';
import { postCommentsDeleteDescription } from './delete';
import { postCommentsGetAllDescription } from './getAll';
import { postCommentsLikeDescription } from './like';
import { postCommentsPinDescription } from './pin';
import { postCommentsUnlikeDescription } from './unlike';
import { postCommentsUnpinDescription } from './unpin';

const showOnlyForPostComments = {
	resource: ['postComments'],
};

export const postCommentsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPostComments,
		},
		options: [
			{
				name: 'Create Comment',
				value: 'create',
				action: 'Create comment',
				description: 'Create a comment on one of your posts',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/comments',
						qs: {
							text: '={{$parameter.text}}',
							answerTo: '={{$parameter.options.answerTo}}',
							giphyId: '={{$parameter.options.giphyId}}',
						},
					},
				},
			},
			{
				name: 'Delete Comment',
				value: 'delete',
				action: 'Delete comment',
				description: 'Delete a comment on one of your posts',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/comments/{{$parameter.commentId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List post comments',
				description: 'Get comments from one of your posts',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/comments',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							sort: '={{$parameter.options.sort}}',
						},
					},
				},
			},
			{
				name: 'Like Comment',
				value: 'like',
				action: 'Like comment',
				description: 'Like a comment on one of your posts',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/comments/{{$parameter.commentId}}/like',
					},
				},
			},
			{
				name: 'Pin Comment',
				value: 'pin',
				action: 'Pin comment',
				description: 'Pin a comment on one of your posts',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/comments/{{$parameter.commentId}}/pin',
					},
				},
			},
			{
				name: 'Unlike Comment',
				value: 'unlike',
				action: 'Unlike comment',
				description: 'Unlike a comment on one of your posts',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/comments/{{$parameter.commentId}}/like',
					},
				},
			},
			{
				name: 'Unpin Comment',
				value: 'unpin',
				action: 'Unpin comment',
				description: 'Unpin a comment from one of your posts',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/comments/{{$parameter.commentId}}/pin',
					},
				},
			},
		],
		default: 'getAll',
	},
	...postCommentsCreateDescription,
	...postCommentsDeleteDescription,
	...postCommentsGetAllDescription,
	...postCommentsLikeDescription,
	...postCommentsPinDescription,
	...postCommentsUnlikeDescription,
	...postCommentsUnpinDescription,
];

