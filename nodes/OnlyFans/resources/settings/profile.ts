import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const updateProfileResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional fields to update on the OnlyFans profile',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Amazon Wishlist URL',
				name: 'wishlist',
				type: 'string',
				default: '',
				description: 'New Amazon Wishlist URL to use. Must be a valid URL. Set to null to empty it.',
			},
			{
				displayName: 'Avatar',
				name: 'avatar',
				type: 'string',
				default: '',
				description: 'New avatar to use (ofapi_media_ ID from /media/upload)',
			},
			{
				displayName: 'Bio',
				name: 'about',
				type: 'string',
				default: '',
				description: 'New bio to use. Set to null to empty it.',
			},
			{
				displayName: 'Display Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'New display name to use. Set to null to use the default display name.',
			},
			{
				displayName: 'Header',
				name: 'header',
				type: 'string',
				default: '',
				description: 'New header/banner to use (ofapi_media_ ID from /media/upload)',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'New location to use. Set to null to empty it.',
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				description: 'New username to use. First check if it exists using /settings/username-exists.',
			},
			{
				displayName: 'Website URL',
				name: 'website',
				type: 'string',
				default: '',
				description: 'New website URL to use. Must be a valid URL. Set to null to empty it.',
			},
		],
	},
];

export const updateProfileOperation = {
	name: 'updateProfile',
	displayName: 'Update Profile',
	method: 'POST' as const,
	parameters: updateProfileResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

