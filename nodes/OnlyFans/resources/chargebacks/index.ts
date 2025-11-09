import type { EndpointResource } from '../index';

import { listChargebacksOperation } from './chargebacks';

export const chargebacksResource: EndpointResource = {
	name: 'chargebacks',
	displayName: 'Chargebacks',
	description: 'Retrieve a list of chargebacks within a specified date range.',
	endpoint: '/{account}/chargebacks',
	operations: [listChargebacksOperation],
};

import { listChargebackStatisticsOperation } from './statistics';

export const statisticsResource: EndpointResource = {
	name: 'statistics',
	displayName: 'Statistics',
	description: 'List chargeback counts & amounts per hour, day or month.',
	endpoint: '/{account}/chargebacks/statistics',
	operations: [listChargebackStatisticsOperation],
};

import { calculateChargebackRatioOperation } from './ratio';

export const ratioResource: EndpointResource = {
	name: 'ratio',
	displayName: 'Ratio',
	description: 'The Chargeback Ratio reflects the number of chargebacks compared to the total number of payments as a percentage. Ideally, your Chargeback Ratio should be under 1%.',
	endpoint: '/{account}/chargebacks/ratio',
	operations: [calculateChargebackRatioOperation],
};

export const chargebacksResources: EndpointResource[] = [
	chargebacksResource,
	statisticsResource,
	ratioResource
];
