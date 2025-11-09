import type { EndpointResource } from '../index';

import { getProfileDetailsOperation } from './username';

export const usernameResource: EndpointResource = {
	name: 'username',
	displayName: '{Username}',
	description: 'Get profile details by username.',
	endpoint: '/profiles/{username}',
	operations: [getProfileDetailsOperation],
};

import { searchProfilesOperation } from './search';

export const searchResource: EndpointResource = {
	name: 'search',
	displayName: 'Search',
	description: 'Full-text search for profiles with filters for pricing, free trials, location, media count and more.',
	endpoint: '/search',
	operations: [searchProfilesOperation],
};

export const publicProfilesResources: EndpointResource[] = [
	usernameResource,
	searchResource
];
