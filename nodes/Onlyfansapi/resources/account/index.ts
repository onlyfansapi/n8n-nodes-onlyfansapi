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
		],
		default: 'getAll',
	},
	...accountGetAllDescription,
];
