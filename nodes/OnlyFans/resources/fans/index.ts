import type { EndpointResource } from '../index';

import { listAllFansOperation } from './all';

export const allResource: EndpointResource = {
	name: 'all',
	displayName: 'All',
	description: 'Get a paginated list of fans for an Account. Newest fans are first.',
	endpoint: '/{account}/fans/all',
	operations: [listAllFansOperation],
};

import { listActiveFansOperation } from './active';

export const activeResource: EndpointResource = {
	name: 'active',
	displayName: 'Active',
	description: 'Get a paginated list of fans for an Account. Newest fans are first.',
	endpoint: '/{account}/fans/active',
	operations: [listActiveFansOperation],
};

import { listExpiredFansOperation } from './expired';

export const expiredResource: EndpointResource = {
	name: 'expired',
	displayName: 'Expired',
	description: 'Get a paginated list of expired fans for an Account. Newest fans are first.',
	endpoint: '/{account}/fans/expired',
	operations: [listExpiredFansOperation],
};

import { listLatestFansOperation } from './latest';

export const latestResource: EndpointResource = {
	name: 'latest',
	displayName: 'Latest',
	description: 'Get a paginated list fans, filterable by total, only new subscribers, or only renewals. Newest fans are first.',
	endpoint: '/{account}/fans/latest',
	operations: [listLatestFansOperation],
};

import { setFansCustomNameOperation } from './customName';

export const customNameResource: EndpointResource = {
	name: 'customName',
	displayName: 'Custom-Name',
	description: 'Change the Fan\'s Custom Name shown in OnlyFans',
	endpoint: '/{account}/fans/{fan_id}/custom-name',
	operations: [setFansCustomNameOperation],
};

import { getFanNotesOperation, createEditFanNotesOperation , clearFanNotesOperation  } from './notes';

export const notesResource: EndpointResource = {
	name: 'notes',
	displayName: 'Notes',
	description: 'Retrieve notes for a specific fan.',
	endpoint: '/{account}/fans/{fan_id}/notes',
	operations: [getFanNotesOperation, createEditFanNotesOperation, clearFanNotesOperation],
};

export const fansResources: EndpointResource[] = [
	allResource,
	activeResource,
	expiredResource,
	latestResource,
	customNameResource,
	notesResource
];
