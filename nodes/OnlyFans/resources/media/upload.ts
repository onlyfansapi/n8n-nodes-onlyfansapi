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
			displayName: 'Set to `Avatar` if This File Will Be Used as a Profile Picture, `Header` for a Profile Banner, or Keep Empty if This File Will Be for Anything Else',
			name: 'type',
			type: 'string',
			default: 'avatar',
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

