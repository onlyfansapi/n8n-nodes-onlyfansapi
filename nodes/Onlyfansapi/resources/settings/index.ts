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
						url: '={{$parameter.accountId}}/settings/username-exists',
						body: {
							username: '={{$parameter.username}}',
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
						url: '={{$parameter.accountId}}/settings',
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
						url: '={{$parameter.accountId}}/settings/profile',
						body: {
							username: '={{$parameter.updateFields.username}}',
							name: '={{$parameter.updateFields.name}}',
							avatar: '={{$parameter.updateFields.avatar}}',
							header: '={{$parameter.updateFields.header}}',
							about: '={{$parameter.updateFields.about}}',
							location: '={{$parameter.updateFields.location}}',
							website: '={{$parameter.updateFields.website}}',
							wishlist: '={{$parameter.updateFields.wishlist}}',
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

