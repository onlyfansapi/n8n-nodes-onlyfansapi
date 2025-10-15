import type { INodeProperties } from 'n8n-workflow';
import { usersGetDescription } from './get';

const showOnlyForUsers = {
	resource: ['users'],
};

export const usersDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForUsers,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get user details',
				description: 'Get OnlyFans profile details for a given username',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/users/{{$parameter.username}}',
					},
				},
			},
		],
		default: 'get',
	},
	...usersGetDescription,
];

