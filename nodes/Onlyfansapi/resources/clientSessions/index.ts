import type { INodeProperties } from 'n8n-workflow';
import { clientSessionsCreateDescription } from './create';

const showOnlyForClientSessions = {
	resource: ['clientSessions'],
};

export const clientSessionsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForClientSessions,
		},
		options: [
			{
				name: 'Create Client Session',
				value: 'create',
				action: 'Create client session',
				description: 'Create Client Session Token for later use in embedded auth components - eg. via @onlyfansapi/auth npm package.',
				routing: {
					request: {
						method: 'POST',
						url: '/client-sessions',
						body: {
							display_name: '={{$parameter.display_name}}',
							client_reference_id: '={{$parameter.additionalFields.client_reference_id}}',
							proxy_country: '={{$parameter.additionalFields.proxy_country}}',
						},
					},
				},
			},
		],
		default: 'create',
	},
	...clientSessionsCreateDescription,
];
