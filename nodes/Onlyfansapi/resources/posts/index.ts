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
						url: '{{.accountId}}/posts/{{$parameter.postId}}/archive',
						qs: {
							private_archive: '{{.options.private_archive}}',
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
						url: '{{.accountId}}/posts/{{$parameter.postId}}',
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
						url: '{{.accountId}}/posts/{{$parameter.postId}}',
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
						url: '{{.accountId}}/posts',
						qs: {
							query: '{{.options.query}}',
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
							order: '{{.options.order}}',
							sort: '{{.options.sort}}',
							pinned: '{{.options.pinned}}',
							counters: '{{.options.counters}}',
							minimumPublishDate: '{{.options.minimumPublishDate}}',
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
						url: '{{.accountId}}/posts/{{$parameter.postId}}/pin',
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
						url: '{{.accountId}}/posts',
						body: {
							text: '{{.text}}',
							labelIds: '{{.additionalFields.labelIds ? $parameter.additionalFields.labelIds.split(",") : undefined}}',
							price: '{{.additionalFields.price}}',
							mediaFiles: '{{.additionalFields.mediaFiles ? $parameter.additionalFields.mediaFiles.split(",") : undefined}}',
							scheduledDate: '{{.additionalFields.scheduledDate}}',
							saveForLater: '{{.additionalFields.saveForLater}}',
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
						url: '{{.accountId}}/posts/{{$parameter.postId}}/statistics',
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
						url: '{{.accountId}}/posts/{{$parameter.postId}}/unarchive',
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
						url: '{{.accountId}}/posts/{{$parameter.postId}}',
						body: {
							text: '{{.updateFields.text}}',
							labelIds: '{{.updateFields.labelIds ? $parameter.updateFields.labelIds.split(",") : undefined}}',
							price: '{{.updateFields.price}}',
							mediaFiles: '{{.updateFields.mediaFiles ? $parameter.updateFields.mediaFiles.split(",") : undefined}}',
							scheduledDate: '{{.updateFields.scheduledDate}}',
							saveForLater: '{{.updateFields.saveForLater}}',
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

