import type { EndpointResource } from '../index';

import { getApiAccountWorkflowsAccountPerformanceStartingRevenuesOperation } from './startingRevenues';

export const startingRevenuesResource: EndpointResource = {
	name: 'startingRevenues',
	displayName: 'Starting-Revenues',
	description: 'Starting-Revenues',
	endpoint: '/{account}/workflows/account-performance/starting-revenues',
	operations: [getApiAccountWorkflowsAccountPerformanceStartingRevenuesOperation],
};

export const endpointsResources: EndpointResource[] = [
	startingRevenuesResource
];
