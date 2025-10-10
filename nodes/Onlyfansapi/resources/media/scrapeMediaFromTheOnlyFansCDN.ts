import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const mediaScrapeMediaFromTheOnlyFansCDNDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['media'],
				operation: ['scrapeMediaFromTheOnlyFansCDN'],
			},
		},
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['media'],
				operation: ['scrapeMediaFromTheOnlyFansCDN'],
			},
		},
		description: 'The CDN URL to scrape. Keep in mind that these URLs expire fast.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['media'],
				operation: ['scrapeMediaFromTheOnlyFansCDN'],
			},
		},
		options: [
			{
				displayName: 'Expiration Date',
				name: 'expiration_date',
				type: 'dateTime',
				default: '',
				description: 'The expiration date of the returned temporary_url. Default of 5 minutes. Must be null if public is true.',
			},
			{
				displayName: 'Public',
				name: 'public',
				type: 'boolean',
				default: false,
				description: 'Whether to have the file uploaded to the public CDN (no signed URL needed to access). Default is false. Must be null if expiration_date is set.',
			},
		],
	},
];
