import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const settingsUpdateProfileDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['updateProfile'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['updateProfile'],
			},
		},
		options: [
			{
				displayName: 'About',
				name: 'about',
				type: 'string',
				default: '',
				description: 'The new bio to use (set to empty string to clear)',
			},
			{
				displayName: 'Avatar',
				name: 'avatar',
				type: 'string',
				default: '',
				description: 'The new avatar to use (must be an ofapi_media_ ID)',
			},
			{
				displayName: 'Header',
				name: 'header',
				type: 'string',
				default: '',
				description: 'The new header/banner to use (must be an ofapi_media_ ID)',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'The new location to use (set to empty string to clear)',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The new display name to use (set to empty string to use default)',
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				description: 'The new username to use (check availability first)',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
				description: 'The new website URL to use (must be valid URL, set to empty string to clear)',
			},
			{
				displayName: 'Wishlist',
				name: 'wishlist',
				type: 'string',
				default: '',
				description: 'The new Amazon Wishlist URL to use (must be valid URL, set to empty string to clear)',
			},
		],
	},
];

