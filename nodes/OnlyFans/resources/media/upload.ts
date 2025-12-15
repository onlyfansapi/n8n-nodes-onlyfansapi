import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const uploadMediaToTheOnlyFansCDNResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'The File to Upload',
		name: 'file',
		type: 'string',
		default: 'file.jpg',
		required: true,
		description: 'The file to upload',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when uploading media',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: 'avatar',
				description: 'Set to avatar if used as a profile picture, header for a profile banner, or leave empty',
			},
		],
	},
];

export const uploadMediaToTheOnlyFansCDNOperation = {
	name: 'uploadMediaToTheOnlyFansCDN',
	displayName: 'Upload media to the OnlyFans CDN',
	method: 'POST' as const,
	parameters: uploadMediaToTheOnlyFansCDNResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

