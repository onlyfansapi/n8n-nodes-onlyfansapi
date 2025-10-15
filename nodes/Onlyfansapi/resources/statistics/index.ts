import type { INodeProperties } from 'n8n-workflow';
import { statisticsCalculateTotalTransactionsDescription } from './calculateTotalTransactions';
import { statisticsGetEarningsDescription } from './getEarnings';
import { statisticsGetProfileVisitorsDescription } from './getProfileVisitors';
import { statisticsGetSubscriberMetricsDescription } from './getSubscriberMetrics';
import { statisticsGetSubscriberStatisticsDescription } from './getSubscriberStatistics';
import { statisticsOverviewDescription } from './overview';

const showOnlyForStatistics = {
	resource: ['statistics'],
};

export const statisticsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForStatistics,
		},
		options: [
			{
				name: 'Calculate Total Transactions',
				value: 'calculateTotalTransactions',
				action: 'Calculate total transactions',
				description: 'Calculate the total transactions and amounts',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/statistics/total-transactions',
						qs: {
							start_date: '={{$parameter.options.start_date}}',
							end_date: '={{$parameter.options.end_date}}',
						},
					},
				},
			},
			{
				name: 'Get Earnings',
				value: 'getEarnings',
				action: 'Get earnings',
				description: 'Get the earnings for a given period',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/statistics/statements/earnings',
						qs: {
							start_date: '={{$parameter.start_date}}',
							end_date: '={{$parameter.options.end_date}}',
							type: '={{$parameter.options.type}}',
						},
					},
				},
			},
			{
				name: 'Get Profile Visitors',
				value: 'getProfileVisitors',
				action: 'Get profile visitors',
				description: 'Get the number of profile visitors for a given period',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/statistics/profile-visitors',
						qs: {
							start_date: '={{$parameter.start_date}}',
							end_date: '={{$parameter.options.end_date}}',
						},
					},
				},
			},
			{
				name: 'Get Subscriber Metrics',
				value: 'getSubscriberMetrics',
				action: 'Get subscriber metrics',
				description: 'Get subscriber metrics for a given period',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/statistics/subscriber-metrics',
						qs: {
							start_date: '={{$parameter.start_date}}',
							end_date: '={{$parameter.options.end_date}}',
						},
					},
				},
			},
			{
				name: 'Get Subscriber Statistics',
				value: 'getSubscriberStatistics',
				action: 'Get subscriber statistics',
				description: 'Get subscriber statistics for a given period',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/statistics/subscriber-statistics',
						qs: {
							start_date: '={{$parameter.start_date}}',
							end_date: '={{$parameter.options.end_date}}',
						},
					},
				},
			},
			{
				name: 'Overview',
				value: 'overview',
				action: 'Get statistics overview',
				description: 'Get an overview of statistics',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/statistics/overview',
						qs: {
							start_date: '={{$parameter.start_date}}',
							end_date: '={{$parameter.options.end_date}}',
							type: '={{$parameter.options.type}}',
						},
					},
				},
			},
		],
		default: 'overview',
	},
	...statisticsCalculateTotalTransactionsDescription,
	...statisticsGetEarningsDescription,
	...statisticsGetProfileVisitorsDescription,
	...statisticsGetSubscriberMetricsDescription,
	...statisticsGetSubscriberStatisticsDescription,
	...statisticsOverviewDescription,
];

