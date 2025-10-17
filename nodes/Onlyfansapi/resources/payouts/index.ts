import type { INodeProperties } from 'n8n-workflow';
import { payoutsGetAccountBalancesDescription } from './getAccountBalances';
import { payoutsGetEarningStatisticsDescription } from './getEarningStatistics';
import { payoutsGetEligibilityDescription } from './getEligibility';
import { payoutsListPayoutRequestsDescription } from './listPayoutRequests';
import { payoutsListTransactionsEarningsDescription } from './listTransactionsEarnings';
import { payoutsRequestManualWithdrawalDescription } from './requestManualWithdrawal';
import { payoutsUpdatePayoutFrequencyDescription } from './updatePayoutFrequency';

const showOnlyForPayouts = {
	resource: ['payouts'],
};

export const payoutsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPayouts,
		},
		options: [
			{
				name: 'Get Account Balances',
				value: 'getAccountBalances',
				action: 'Get account balances',
				description: 'Get the current available and pending balances for the account',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/payouts/balances',
					},
				},
			},
			{
				name: 'Get Earning Statistics',
				value: 'getEarningStatistics',
				action: 'Get earning statistics',
				description: 'Get total and monthly time-series earning statistics for the account',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/payouts/earning-statistics',
					},
					send: {
						type: 'query',
						property: 'options',
					},
				},
			},
			{
				name: 'Get Eligibility',
				value: 'getEligibility',
				action: 'Get eligibility',
				description: 'Get the eligibility details for receiving payouts',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/payouts/eligibility',
					},
				},
			},
			{
				name: 'List Payout Requests',
				value: 'listPayoutRequests',
				action: 'List payout requests',
				description: 'List all payout requests for the account',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/payouts/payout-requests',
					},
					send: {
						type: 'query',
						property: 'options',
					},
				},
			},
			{
				name: 'List Transactions (Earnings)',
				value: 'listTransactionsEarnings',
				action: 'List transactions earnings',
				description: 'List all transactions for the account',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/payouts/transactions',
					},
					send: {
						type: 'query',
						property: 'options',
					},
				},
			},
			{
				name: 'Request Manual Withdrawal',
				value: 'requestManualWithdrawal',
				action: 'Request manual withdrawal',
				description: 'Request a payout withdrawal, if the frequency is set to manual. Refer to our /payouts/balances endpoint to retrieve the minimum and maximum withdrawal amounts.',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/payouts/request-manual-withdrawal',
					},
				},
			},
			{
				name: 'Update Payout Frequency',
				value: 'updatePayoutFrequency',
				action: 'Update payout frequency',
				description: 'Update the payout frequency for the account (Manual, Weekly or Monthly)',
				routing: {
					request: {
						method: 'PATCH',
						url: '{{.accountId}}/payouts/payout-frequency',
						body: {
							frequency: '{{.withdrawalPeriod}}',
						},
					},
				},
			},
		],
		default: 'getAccountBalances',
	},
	...payoutsGetAccountBalancesDescription,
	...payoutsGetEarningStatisticsDescription,
	...payoutsGetEligibilityDescription,
	...payoutsListPayoutRequestsDescription,
	...payoutsListTransactionsEarningsDescription,
	...payoutsRequestManualWithdrawalDescription,
	...payoutsUpdatePayoutFrequencyDescription,
];
