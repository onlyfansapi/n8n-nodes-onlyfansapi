import type { INodeProperties } from 'n8n-workflow';
import { mediaScrapeMediaFromTheOnlyFansCDNDescription } from './scrapeMediaFromTheOnlyFansCDN';

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
						url: '{{.accountId}}/media/scrape',
						body: {
							url: '{{.url}}',
							expiration_date: '{{.additionalFields.expiration_date}}',
							public: '{{.additionalFields.public}}',
						},
					},
				},
			},
		],
		default: 'scrapeMediaFromTheOnlyFansCDN',
	},
	...mediaScrapeMediaFromTheOnlyFansCDNDescription,
];
