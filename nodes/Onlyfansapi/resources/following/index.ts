import type { INodeProperties } from 'n8n-workflow';
import { followingListActiveFollowingsDescription } from './listActiveFollowings';
import { followingListAllFollowingsDescription } from './listAllFollowings';
import { followingListExpiredFollowingsDescription } from './listExpiredFollowings';

const showOnlyForFollowing = {
	resource: ['following'],
};

export const followingDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFollowing,
		},
		options: [
			{
				name: 'List Active Followings',
				value: 'listActiveFollowings',
				action: 'List active followings',
				description: 'Get a paginated list of followings for an Account. Newest followings are first.',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/following/active',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							'filter.online': '={{$parameter.filters.online}}',
							'filter.paid': '={{$parameter.filters.paid}}',
						},
					},
				},
			},
			{
				name: 'List All Followings',
				value: 'listAllFollowings',
				action: 'List all followings',
				description: 'Get a paginated list of followings for an Account. Newest followings are first.',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/following/all',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							'filter.online': '={{$parameter.filters.online}}',
							'filter.paid': '={{$parameter.filters.paid}}',
						},
					},
				},
			},
			{
				name: 'List Expired Followings',
				value: 'listExpiredFollowings',
				action: 'List expired followings',
				description: 'Get a paginated list of expired followings for an Account. Newest followings are first.',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/following/expired',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							'filter.online': '={{$parameter.filters.online}}',
							'filter.paid': '={{$parameter.filters.paid}}',
						},
					},
				},
			},
		],
		default: 'listAllFollowings',
	},
	...followingListActiveFollowingsDescription,
	...followingListAllFollowingsDescription,
	...followingListExpiredFollowingsDescription,
];
