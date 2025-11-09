import type { EndpointResource } from '../index';

import { listAllFollowingsOperation } from './all';

export const allResource: EndpointResource = {
	name: 'all',
	displayName: 'All',
	description: 'Get a paginated list of followings for an Account. Newest followings are first.',
	endpoint: '/{account}/following/all',
	operations: [listAllFollowingsOperation],
};

import { listActiveFollowingsOperation } from './active';

export const activeResource: EndpointResource = {
	name: 'active',
	displayName: 'Active',
	description: 'Get a paginated list of followings for an Account. Newest followings are first.',
	endpoint: '/{account}/following/active',
	operations: [listActiveFollowingsOperation],
};

import { listExpiredFollowingsOperation } from './expired';

export const expiredResource: EndpointResource = {
	name: 'expired',
	displayName: 'Expired',
	description: 'Get a paginated list of expired followings for an Account. Newest followings are first.',
	endpoint: '/{account}/following/expired',
	operations: [listExpiredFollowingsOperation],
};

export const followingResources: EndpointResource[] = [
	allResource,
	activeResource,
	expiredResource
];
