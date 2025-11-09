import type { EndpointResource } from '../index';

import { listTrackingLinkSubscribersOperation } from './subscribers';

export const subscribersResource: EndpointResource = {
	name: 'subscribers',
	displayName: 'Subscribers',
	description: 'Get list of subscribers who joined through a Tracking Link',
	endpoint: '/{account}/tracking-links/{tracking_link_id}/subscribers',
	operations: [listTrackingLinkSubscribersOperation],
};

import { listTrackingLinkSpendersOperation } from './spenders';

export const spendersResource: EndpointResource = {
	name: 'spenders',
	displayName: 'Spenders',
	description: 'Get list of spenders who made purchases through a Tracking Link',
	endpoint: '/{account}/tracking-links/{tracking_link_id}/spenders',
	operations: [listTrackingLinkSpendersOperation],
};

import { listTrackingLinksOperation, createTrackingLinkOperation  } from './trackingLinks';

export const trackingLinksResource: EndpointResource = {
	name: 'trackingLinks',
	displayName: 'Tracking-Links',
	description: 'List all tracking links for the account and revenue data',
	endpoint: '/{account}/tracking-links',
	operations: [listTrackingLinksOperation, createTrackingLinkOperation],
};

import { deleteTrackingLinkOperation } from './trackingLinkId';

export const trackingLinkIdResource: EndpointResource = {
	name: 'trackingLinkId',
	displayName: '{Tracking Link Id}',
	description: 'Delete a Tracking Link',
	endpoint: '/{account}/tracking-links/{tracking_link_id}',
	operations: [deleteTrackingLinkOperation],
};

export const trackingLinksResources: EndpointResource[] = [
	subscribersResource,
	spendersResource,
	trackingLinksResource,
	trackingLinkIdResource
];
