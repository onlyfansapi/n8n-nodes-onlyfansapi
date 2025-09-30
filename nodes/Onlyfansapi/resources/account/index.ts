import type { INodeProperties } from 'n8n-workflow';
import { accountGetAllDescription } from './getAll';

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
				name: 'List Accounts',
				value: 'getAll',
				action: 'List accounts',
				description: 'List all connected OnlyFans accounts.',
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
		],
		default: 'getAll',
	},
	...accountGetAllDescription,
];
