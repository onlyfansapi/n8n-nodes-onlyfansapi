import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const scrapeMediaFromTheOnlyFansCDNResource: INodeProperties[] = [
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
		description: 'Optional parameters when scraping media from the CDN',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'CDN URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'The CDN URL to scrape. Keep in mind that these URLs expire fast.',
			},
			{
				displayName: 'Expiration Date',
				name: 'expiration_date',
				type: 'string',
				default: '',
				description: 'Expiration date of the returned temporary_url. Default ~5 minutes. Must be null if public is true.',
			},
			{
				displayName: 'File Type',
				name: 'file_type',
				type: 'string',
				default: 'full',
				description: 'The file type to scrape. Only allowed when using media_id.',
			},
			{
				displayName: 'Media ID',
				name: 'media_id',
				type: 'number',
				default: 0,
				description: 'The OnlyFans Vault media ID. Can be used instead of the URL.',
			},
			{
				displayName: 'Public',
				name: 'public',
				type: 'boolean',
				default: false,
				description: 'Whether to upload the file to the public CDN (no signed URL needed). Must be null if expiration_date is set.',
			},
		],
	},
];

export const scrapeMediaFromTheOnlyFansCDNOperation = {
	name: 'scrapeMediaFromTheOnlyFansCDN',
	displayName: 'Scrape media from the OnlyFans CDN',
	method: 'POST' as const,
	parameters: scrapeMediaFromTheOnlyFansCDNResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

