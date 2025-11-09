import type { EndpointResource } from '../index';

import { uploadMediaToTheOnlyFansCDNOperation } from './upload';

export const uploadResource: EndpointResource = {
	name: 'upload',
	displayName: 'Upload',
	description: 'The response can be used **only once** to manually include media in a post or message. This endpoint does not upload media to the Vault.',
	endpoint: '/{account}/media/upload',
	operations: [uploadMediaToTheOnlyFansCDNOperation],
};

import { scrapeMediaFromTheOnlyFansCDNOperation } from './scrape';

export const scrapeResource: EndpointResource = {
	name: 'scrape',
	displayName: 'Scrape',
	description: 'Scrapes a `https://cdn*.onlyfans.com/*` URL *or* Vault Media ID, and uploads it to the OnlyFans API CDN, where you can view or download the file. **Max file size is 500MB**',
	endpoint: '/{account}/media/scrape',
	operations: [scrapeMediaFromTheOnlyFansCDNOperation],
};

export const mediaResources: EndpointResource[] = [
	uploadResource,
	scrapeResource
];
