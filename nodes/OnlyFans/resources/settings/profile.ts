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
			displayName: 'The New Username to Use',
			name: 'username',
			type: 'string',
			default: 'MyNewUsername',
			description: 'The new username to use. Make sure to first check if it exists using our `/settings/username-exists` endpoint.',
		},
		{
			displayName: 'The New Display Name to Use',
			name: 'name',
			type: 'string',
			default: 'u1234',
			description: 'The new display name to use. Set to `null` to use the default display name.',
		},
		{
			displayName: 'The New Avatar to Use',
			name: 'avatar',
			type: 'string',
			default: 'ofapi_media_abc123',
			description: 'The new avatar to use. Must be a `ofapi_media_` ID. Refer to our `/media/upload` endpoint on how to get this.',
		},
		{
			displayName: 'The New Header (Banner) to Use',
			name: 'header',
			type: 'string',
			default: 'ofapi_media_abc123',
			description: 'The new header (banner) to use. Must be a `ofapi_media_` ID. Refer to our `/media/upload` endpoint on how to get this.',
		},
		{
			displayName: 'The New Bio to Use',
			name: 'about',
			type: 'string',
			default: 'Hey there!',
			description: 'The new bio to use. Set to `null` to empty it.',
		},
		{
			displayName: 'The New Location to Use',
			name: 'location',
			type: 'string',
			default: 'Europe',
			description: 'The new location to use. Set to `null` to empty it.',
		},
		{
			displayName: 'The New Website URL to Use',
			name: 'website',
			type: 'string',
			default: 'https://example.com',
			description: 'The new website URL to use. Must be a valid URL. Set to `null` to empty it.',
		},
		{
			displayName: 'The New Amazon Wishlist URL to Use',
			name: 'wishlist',
			type: 'string',
			default: 'https://example.com',
			description: 'The new Amazon Wishlist URL to use. Must be a valid URL. Set to `null` to empty it.',
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

