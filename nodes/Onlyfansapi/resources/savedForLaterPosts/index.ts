import type { INodeProperties } from 'n8n-workflow';
import { savedForLaterPostsDisableAutomaticPostingDescription } from './disableAutomaticPosting';
import { savedForLaterPostsEnableAutomaticPostingDescription } from './enableAutomaticPosting';
import { savedForLaterPostsGetAllDescription } from './getAll';
import { savedForLaterPostsGetSettingsDescription } from './getSettings';

const showOnlyForSavedForLaterPosts = {
	resource: ['savedForLaterPosts'],
};

export const savedForLaterPostsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSavedForLaterPosts,
		},
		options: [
			{
				name: 'Disable Automatic Posting',
				value: 'disableAutomaticPosting',
				action: 'Disable automatic posting',
				description: 'Disable automatic posting of Saved For Later posts',
				routing: {
					request: {
						method: 'PATCH',
						url: '{{.accountId}}/saved-for-later/posts/settings/disable-automatic-posting',
					},
				},
			},
			{
				name: 'Enable Automatic Posting',
				value: 'enableAutomaticPosting',
				action: 'Enable automatic posting',
				description: 'Enable or update automatic posting of Saved For Later posts',
				routing: {
					request: {
						method: 'PATCH',
						url: '{{.accountId}}/saved-for-later/posts/settings/enable-or-update-automatic-posting',
						body: {
							period: '{{.period}}',
						},
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List saved for later posts',
				description: 'List many posts that are marked as "Save For Later"',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/saved-for-later/posts',
						qs: {
							limit: '{{$parameter.options.limit}}',
							offset: '{{$parameter.options.offset}}',
						},
					},
				},
			},
			{
				name: 'Get Settings',
				value: 'getSettings',
				action: 'Get post settings',
				description: 'Get the Saved For Later post settings',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/saved-for-later/posts/settings',
					},
				},
			},
		],
		default: 'getAll',
	},
	...savedForLaterPostsDisableAutomaticPostingDescription,
	...savedForLaterPostsEnableAutomaticPostingDescription,
	...savedForLaterPostsGetAllDescription,
	...savedForLaterPostsGetSettingsDescription,
];

