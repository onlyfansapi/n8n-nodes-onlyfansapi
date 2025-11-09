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
			displayName: 'The CDN URL to Scrape',
			name: 'url',
			type: 'string',
			default: 'https://cdn2.onlyfans.com/files/e/e5/123/600x400_123.jpg?Tag=2&u=123&Policy=123&Signature=signature&Key-Pair-Id=123',
			description: 'The CDN URL to scrape. **Keep in mind that these URLs expire fast.**.',
		},
		{
			displayName: 'The OnlyFans Vault Media ID',
			name: 'media_id',
			type: 'number',
			default: 1234567890,
			description: 'The OnlyFans Vault Media ID. **Can be used instead of the `URL`.**.',
		},
		{
			displayName: 'The File Type to Scrape',
			name: 'file_type',
			type: 'string',
			default: 'full',
			description: 'The file type to scrape. Only allowed when using `media_id`.',
		},
		{
			displayName: 'The Expiration Date of Our Returned `Temporary_url`',
			name: 'expiration_date',
			type: 'string',
			default: '2025-01-01 00:00:00',
			description: 'The expiration date of our returned `temporary_url`. Default of 5 minutes. Must be null if `public` is true.',
		},
		{
			displayName: 'Set to True if You Want to Have the File Uploaded to Our Public CDN (No Signed URL Needed to Access)',
			name: 'public',
			type: 'boolean',
			default: false,
			description: 'Whether to have the file uploaded to our public CDN (no signed URL needed to access). Default is false. Must be null if `expiration_date` is set.',
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

