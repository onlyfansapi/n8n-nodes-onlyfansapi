import type { EndpointResource } from '../index';

import { getAccountBalancesOperation } from './balances';

export const balancesResource: EndpointResource = {
	name: 'balances',
	displayName: 'Balances',
	description: 'Get the current available and pending balances for the account.',
	endpoint: '/{account}/payouts/balances',
	operations: [getAccountBalancesOperation],
};

import { getEligibilityOperation } from './eligibility';

export const eligibilityResource: EndpointResource = {
	name: 'eligibility',
	displayName: 'Eligibility',
	description: 'Get the eligibility details for receiving payouts.',
	endpoint: '/{account}/payouts/eligibility',
	operations: [getEligibilityOperation],
};

import { listTransactionsEarningsOperation } from './transactions';

export const transactionsResource: EndpointResource = {
	name: 'transactions',
	displayName: 'Transactions',
	description: 'List all transactions for the account.',
	endpoint: '/{account}/payouts/transactions',
	operations: [listTransactionsEarningsOperation],
};

import { getEarningStatisticsOperation } from './earningStatistics';

export const earningStatisticsResource: EndpointResource = {
	name: 'earningStatistics',
	displayName: 'Earning-Statistics',
	description: 'Get total and monthly time-series earning statistics for the account.',
	endpoint: '/{account}/payouts/earning-statistics',
	operations: [getEarningStatisticsOperation],
};

import { listPayoutRequestsOperation } from './payoutRequests';

export const payoutRequestsResource: EndpointResource = {
	name: 'payoutRequests',
	displayName: 'Payout-Requests',
	description: 'List all payout requests for the account.',
	endpoint: '/{account}/payouts/payout-requests',
	operations: [listPayoutRequestsOperation],
};

import { updatePayoutFrequencyOperation } from './payoutFrequency';

export const payoutFrequencyResource: EndpointResource = {
	name: 'payoutFrequency',
	displayName: 'Payout-Frequency',
	description: 'Update the payout frequency for the account (Manual, Weekly or Monthly).',
	endpoint: '/{account}/payouts/payout-frequency',
	operations: [updatePayoutFrequencyOperation],
};

import { requestManualWithdrawalOperation } from './requestManualWithdrawal';

export const requestManualWithdrawalResource: EndpointResource = {
	name: 'requestManualWithdrawal',
	displayName: 'Request-Manual-Withdrawal',
	description: 'Request a payout withdrawal, if the frequency is set to manual. Refer to our `/payouts/balances` endpoint to retrieve the minimum and maximum withdrawal amounts.',
	endpoint: '/{account}/payouts/request-manual-withdrawal',
	operations: [requestManualWithdrawalOperation],
};

export const payoutsResources: EndpointResource[] = [
	balancesResource,
	eligibilityResource,
	transactionsResource,
	earningStatisticsResource,
	payoutRequestsResource,
	payoutFrequencyResource,
	requestManualWithdrawalResource
];
