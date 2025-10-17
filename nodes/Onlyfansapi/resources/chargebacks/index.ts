import type { INodeProperties } from 'n8n-workflow';
import { chargebacksCalculateChargebackRatioDescription } from './calculateChargebackRatio';
import { chargebacksGetAllDescription } from './getAll';
import { chargebacksListChargebackStatisticsDescription } from './listChargebackStatistics';

const showOnlyForChargebacks = {
	resource: ['chargebacks'],
};

export const chargebacksDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChargebacks,
		},
		options: [
			{
				name: 'Calculate Chargeback Ratio',
				value: 'calculateChargebackRatio',
				action: 'Calculate chargeback ratio',
				description: 'The Chargeback Ratio reflects the number of chargebacks compared to the total number of payments as a percentage. Ideally, your Chargeback Ratio should be under 1%.',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/chargebacks/ratio',
						qs: {
							start_date: '{{.start_date}}',
							end_date: '{{.end_date}}',
						},
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List chargebacks',
				description: 'Retrieve a list of chargebacks within a specified date range',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/chargebacks',
						qs: {
							start_date: '{{.start_date}}',
							end_date: '{{.end_date}}',
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
						},
					},
				},
			},
			{
				name: 'List Chargeback Statistics',
				value: 'listChargebackStatistics',
				action: 'List chargeback statistics',
				description: 'List chargeback counts & amounts per hour, day or month',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/chargebacks/statistics',
						qs: {
							start_date: '{{.start_date}}',
							end_date: '{{.end_date}}',
						},
					},
				},
			},
		],
		default: 'calculateChargebackRatio',
	},
	...chargebacksCalculateChargebackRatioDescription,
	...chargebacksGetAllDescription,
	...chargebacksListChargebackStatisticsDescription,
];
