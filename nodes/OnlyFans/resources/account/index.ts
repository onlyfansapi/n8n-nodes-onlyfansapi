import type { EndpointResource } from '../index';

import { listAccountsOperation } from './accounts';

export const accountsResource: EndpointResource = {
	name: 'accounts',
	displayName: 'Accounts',
	description: 'List all connected OnlyFans accounts.',
	endpoint: '/accounts',
	operations: [listAccountsOperation],
};

import { disconnectAccountOperation } from './id';

export const idResource: EndpointResource = {
	name: 'id',
	displayName: '{Id}',
	description: 'Disconnect an OnlyFans account.',
	endpoint: '/accounts/{id}',
	operations: [disconnectAccountOperation],
};

import { getCurrentAccountOperation } from './me';

export const meResource: EndpointResource = {
	name: 'me',
	displayName: 'Me',
	description: 'Get OnlyFans Profile details for the currently used Account',
	endpoint: '/{account}/me',
	operations: [getCurrentAccountOperation],
};

import { getModelStartDateOperation } from './modelStartDate';

export const modelStartDateResource: EndpointResource = {
	name: 'modelStartDate',
	displayName: 'Model-Start-Date',
	description: 'Get the start date of the model (the date+time monetization was enabled)',
	endpoint: '/{account}/me/model-start-date',
	operations: [getModelStartDateOperation],
};

import { getTopPercentageOperation } from './topPercentage';

export const topPercentageResource: EndpointResource = {
	name: 'topPercentage',
	displayName: 'Top-Percentage',
	description: 'Get the top percentage of the model (e.g., top 0.02% of all creators)',
	endpoint: '/{account}/me/top-percentage',
	operations: [getTopPercentageOperation],
};

export const accountResources: EndpointResource[] = [
	accountsResource,
	idResource,
	meResource,
	modelStartDateResource,
	topPercentageResource
];
