import type { EndpointResource } from '../index';

import { listFreeTrialLinksOperation, createFreeTrialLinkOperation  } from './trialLinks';

export const trialLinksResource: EndpointResource = {
	name: 'trialLinks',
	displayName: 'Trial-Links',
	description: 'List all free trial links for the account, including the details and statistics',
	endpoint: '/{account}/trial-links',
	operations: [listFreeTrialLinksOperation, createFreeTrialLinkOperation],
};

import { deleteFreeTrialLinkOperation } from './trialLinkId';

export const trialLinkIdResource: EndpointResource = {
	name: 'trialLinkId',
	displayName: '{Trial Link Id}',
	description: 'Delete a free trial link by its ID',
	endpoint: '/{account}/trial-links/{trial_link_id}',
	operations: [deleteFreeTrialLinkOperation],
};

import { listFreeTrialLinkSubscribersOperation } from './subscribers';

export const subscribersResource: EndpointResource = {
	name: 'subscribers',
	displayName: 'Subscribers',
	description: 'Get list of subscribers who joined through a Free Trial Link',
	endpoint: '/{account}/trial-links/{trial_link_id}/subscribers',
	operations: [listFreeTrialLinkSubscribersOperation],
};

import { listFreeTrialLinkSpendersOperation } from './spenders';

export const spendersResource: EndpointResource = {
	name: 'spenders',
	displayName: 'Spenders',
	description: 'Only available if we already scraped subscribers and calculated revenue per fan',
	endpoint: '/{account}/trial-links/{trial_link_id}/spenders',
	operations: [listFreeTrialLinkSpendersOperation],
};

export const freeTrialLinksResources: EndpointResource[] = [
	trialLinksResource,
	trialLinkIdResource,
	subscribersResource,
	spendersResource
];
