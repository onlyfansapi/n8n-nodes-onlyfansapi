import type { INodeProperties } from 'n8n-workflow';
import { postsArchiveDescription } from './archive';
import { postsDeleteDescription } from './delete';
import { postsGetDescription } from './get';
import { postsGetAllDescription } from './getAll';
import { postsPinUnpinDescription } from './pinUnpin';
import { postsSendDescription } from './send';
import { postsShowStatisticsDescription } from './showStatistics';
import { postsUnarchiveDescription } from './unarchive';
import { postsUpdateDescription } from './update';

const showOnlyForPosts = {
	resource: ['posts'],
};

export const postsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPosts,
		},
		options: [
			{
				name: 'Archive Post',
				value: 'archive',
				action: 'Archive post',
				description: 'Archive a post from your account',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/archive',
						qs: {
							private_archive: '={{$parameter.options.private_archive}}',
						},
					},
				},
			},
			{
				name: 'Delete Post',
				value: 'delete',
				action: 'Delete post',
				description: 'Delete a post from your account',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get post',
				description: 'Retrieve details of a post from your account',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List posts',
				description: 'Get posts from your OnlyFans account',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/posts',
						qs: {
							query: '={{$parameter.options.query}}',
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							order: '={{$parameter.options.order}}',
							sort: '={{$parameter.options.sort}}',
							pinned: '={{$parameter.options.pinned}}',
							counters: '={{$parameter.options.counters}}',
							minimumPublishDate: '={{$parameter.options.minimumPublishDate}}',
						},
					},
				},
			},
			{
				name: 'Pin/Unpin Post',
				value: 'pinUnpin',
				action: 'Pin or unpin post',
				description: 'Pin or unpin a post to your account',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/pin',
					},
				},
			},
			{
				name: 'Send Post',
				value: 'send',
				action: 'Send post',
				description: 'Compose and send a new post to your OnlyFans account',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/posts',
						body: {
							text: '={{$parameter.text}}',
							labelIds: '={{$parameter.additionalFields.labelIds ? $parameter.additionalFields.labelIds.split(",") : undefined}}',
							price: '={{$parameter.additionalFields.price}}',
							mediaFiles: '={{$parameter.additionalFields.mediaFiles ? $parameter.additionalFields.mediaFiles.split(",") : undefined}}',
							scheduledDate: '={{$parameter.additionalFields.scheduledDate}}',
							saveForLater: '={{$parameter.additionalFields.saveForLater}}',
						},
					},
				},
			},
			{
				name: 'Show Post Statistics',
				value: 'showStatistics',
				action: 'Show post statistics',
				description: 'Get statistics for a specific post',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/statistics',
					},
				},
			},
			{
				name: 'Unarchive Post',
				value: 'unarchive',
				action: 'Unarchive post',
				description: 'Unarchive a post from your account',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}/unarchive',
					},
				},
			},
			{
				name: 'Update Post',
				value: 'update',
				action: 'Update post',
				description: 'Update a posted, queued, or "saved for later" post',
				routing: {
					request: {
						method: 'PUT',
						url: '={{$parameter.accountId}}/posts/{{$parameter.postId}}',
						body: {
							text: '={{$parameter.updateFields.text}}',
							labelIds: '={{$parameter.updateFields.labelIds ? $parameter.updateFields.labelIds.split(",") : undefined}}',
							price: '={{$parameter.updateFields.price}}',
							mediaFiles: '={{$parameter.updateFields.mediaFiles ? $parameter.updateFields.mediaFiles.split(",") : undefined}}',
							scheduledDate: '={{$parameter.updateFields.scheduledDate}}',
							saveForLater: '={{$parameter.updateFields.saveForLater}}',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...postsArchiveDescription,
	...postsDeleteDescription,
	...postsGetDescription,
	...postsGetAllDescription,
	...postsPinUnpinDescription,
	...postsSendDescription,
	...postsShowStatisticsDescription,
	...postsUnarchiveDescription,
	...postsUpdateDescription,
];

