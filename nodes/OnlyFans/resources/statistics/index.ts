import type { EndpointResource } from '../index';

import { calculateTotalTransactionsOperation } from './totalTransactions';

export const totalTransactionsResource: EndpointResource = {
	name: 'totalTransactions',
	displayName: 'Total-Transactions',
	description: 'Calculate the total transactions and amounts.',
	endpoint: '/{account}/statistics/total-transactions',
	operations: [calculateTotalTransactionsOperation],
};

import { statisticsOverviewOperation } from './overview';

export const overviewResource: EndpointResource = {
	name: 'overview',
	displayName: 'Overview',
	description: 'Get an overview of statistics for fans, visitors, posts, or general.',
	endpoint: '/{account}/statistics/overview',
	operations: [statisticsOverviewOperation],
};

import { getSubscriberMetricsOperation } from './subscriberMetrics';

export const subscriberMetricsResource: EndpointResource = {
	name: 'subscriberMetrics',
	displayName: 'Subscriber-Metrics',
	description: 'Get subscriber metrics including total, new, renewed, paid, and free subscriptions for a specified timeframe. `unknown_subscriptions` indicates deleted fan accounts.',
	endpoint: '/{account}/statistics/subscriber-metrics',
	operations: [getSubscriberMetricsOperation],
};

import { getEarningsOperation } from './earnings';

export const earningsResource: EndpointResource = {
	name: 'earnings',
	displayName: 'Earnings',
	description: 'Get the earnings for a given period.',
	endpoint: '/{account}/statistics/statements/earnings',
	operations: [getEarningsOperation],
};

import { getProfileVisitorsOperation } from './profileVisitors';

export const profileVisitorsResource: EndpointResource = {
	name: 'profileVisitors',
	displayName: 'Profile-Visitors',
	description: 'Get the number of profile visitors for a given period.',
	endpoint: '/{account}/statistics/reach/profile-visitors',
	operations: [getProfileVisitorsOperation],
};

import { getSubscriberStatisticsOperation } from './statistics';

export const statisticsResource: EndpointResource = {
	name: 'statistics',
	displayName: 'Statistics',
	description: 'Get subscriber and earning statistics for an account for a specified timeframe. Optionally, filter by all, renews, or new subscribers.',
	endpoint: '/{account}/subscribers/statistics',
	operations: [getSubscriberStatisticsOperation],
};

export const statisticsResources: EndpointResource[] = [
	totalTransactionsResource,
	overviewResource,
	subscriberMetricsResource,
	earningsResource,
	profileVisitorsResource,
	statisticsResource
];
