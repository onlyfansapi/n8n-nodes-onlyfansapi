import type { INodeProperties } from 'n8n-workflow';
import { mediaScrapeMediaFromTheOnlyFansCDNDescription } from './scrapeMediaFromTheOnlyFansCDN';
import { mediaUploadMediaToTheOnlyFansCDNDescription } from './uploadMediaToTheOnlyFansCDN';

const showOnlyForMedia = {
	resource: ['media'],
};

export const mediaDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMedia,
		},
		options: [
			{
				name: 'Scrape Media From The OnlyFans CDN',
				value: 'scrapeMediaFromTheOnlyFansCDN',
				action: 'Scrape media from the only fans cdn',
				description: 'Scrapes a https://cdn*.onlyfans.com/* URL and uploads it to the OnlyFans API CDN, so that you can view or download the file. Max file size is 500MB.',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/media/scrape',
						body: {
							url: '={{$parameter.url}}',
							expiration_date: '={{$parameter.additionalFields.expiration_date}}',
							public: '={{$parameter.additionalFields.public}}',
						},
					},
				},
			},
			{
				name: 'Upload Media To The OnlyFans CDN',
				value: 'uploadMediaToTheOnlyFansCDN',
				action: 'Upload media to the only fans cdn',
				description: 'The response can be used only once to manually include media in a post or message. This endpoint does not upload media to the Vault.',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/media/upload',
					},
					send: {
						type: 'body',
						contentType: 'multipart-form-data',
						property: {
							file: '={{$parameter.file}}',
							type: '={{$parameter.additionalFields.type}}',
						},
					},
				},
			},
		],
		default: 'scrapeMediaFromTheOnlyFansCDN',
	},
	...mediaScrapeMediaFromTheOnlyFansCDNDescription,
	...mediaUploadMediaToTheOnlyFansCDNDescription,
];
