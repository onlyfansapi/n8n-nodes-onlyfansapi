import type { INodeProperties } from 'n8n-workflow';
import { settingsCheckUsernameAvailabilityDescription } from './checkUsernameAvailability';
import { settingsGetDescription } from './get';
import { settingsUpdateProfileDescription } from './updateProfile';

const showOnlyForSettings = {
	resource: ['settings'],
};

export const settingsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSettings,
		},
		options: [
			{
				name: 'Check Username Availability',
				value: 'checkUsernameAvailability',
				action: 'Check username availability',
				description: 'Check if a username is taken',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/settings/username-exists',
						body: {
							username: '{{.username}}',
						},
					},
				},
			},
			{
				name: 'Get Settings',
				value: 'get',
				action: 'Get settings',
				description: 'Returns the account settings',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/settings',
					},
				},
			},
			{
				name: 'Update Profile',
				value: 'updateProfile',
				action: 'Update profile',
				description: 'Update the account profile',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/settings/profile',
						body: {
							username: '{{.updateFields.username}}',
							name: '{{.updateFields.name}}',
							avatar: '{{.updateFields.avatar}}',
							header: '{{.updateFields.header}}',
							about: '{{.updateFields.about}}',
							location: '{{.updateFields.location}}',
							website: '{{.updateFields.website}}',
							wishlist: '{{.updateFields.wishlist}}',
						},
					},
				},
			},
		],
		default: 'get',
	},
	...settingsCheckUsernameAvailabilityDescription,
	...settingsGetDescription,
	...settingsUpdateProfileDescription,
];

