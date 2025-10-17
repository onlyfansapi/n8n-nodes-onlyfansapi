import type { INodeProperties } from 'n8n-workflow';
import { accountDeleteDescription } from './delete';
import { accountGetAllDescription } from './getAll';
import { accountGetDescription } from './get';
import { accountGetModelStartDateDescription } from './getModelStartDate';

const showOnlyForAccounts = {
	resource: ['account'],
};

export const accountDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAccounts,
		},
		options: [
			{
				name: 'Disconnect Account',
				value: 'delete',
				action: 'Disconnect account',
				description: 'Disconnect an OnlyFans account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/accounts/{{$parameter.accountId}}',
					},
				},
			},
			{
				name: 'Get Account',
				value: 'get',
				action: 'Get account',
				description: 'Get OnlyFans Profile details for an Account',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/me',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List accounts',
				description: 'List many connected OnlyFans accounts',
				routing: {
					request: {
						method: 'GET',
						url: '/accounts',
					},
					send: {
						paginate: false,
						type: 'query',
						property: 'options',
					},
				},
			},
			{
				name: 'Get Model Start Date',
				value: 'getModelStartDate',
				action: 'Get model start date',
				description: 'Get the start date of the model (the date+time monetization was enabled)',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/me/model-start-date',
					},
				},
			},
		],
		default: 'getAll',
	},
	...accountDeleteDescription,
	...accountGetDescription,
	...accountGetAllDescription,
	...accountGetModelStartDateDescription,
];
