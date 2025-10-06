import type { INodeProperties } from 'n8n-workflow';

const showOnlyForApiKeys = {
	resource: ['apiKeys'],
};

export const apiKeysDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForApiKeys,
		},
		options: [
			{
				name: 'Whoami',
				value: 'whoami',
				action: 'Whoami',
				description: 'Get details about the currently used API Key & the relevant Team',
				routing: {
					request: {
						method: 'GET',
						url: '/whoami',
					},
				},
			},
		],
		default: 'whoami',
	},
];
