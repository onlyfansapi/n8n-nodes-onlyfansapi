import type { INodeProperties } from 'n8n-workflow';
import { transactionsGetAllDescription } from './getAll';

const showOnlyForTransactions = {
	resource: ['transactions'],
};

export const transactionsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTransactions,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List transactions',
				description: 'Get a paginated list of transactions for an account (newest first)',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/transactions',
					},
					send: {
						type: 'query',
						property: 'options',
					},
				},
			},
		],
		default: 'getAll',
	},
	...transactionsGetAllDescription,
];

