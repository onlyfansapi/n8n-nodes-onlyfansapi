import type { INodeProperties } from 'n8n-workflow';

export const clientSessionsCreateDescription: INodeProperties[] = [
	{
		displayName: 'Display Name',
		name: 'display_name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['clientSessions'],
				operation: ['create'],
			},
		},
		description: 'Display Name of the account visible in your OnlyFansAPI Console Dashboard',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['clientSessions'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Client Reference ID',
				name: 'client_reference_id',
				type: 'string',
				default: '',
				description: 'Your Internal Reference ID for the connected account',
			},
			{
				displayName: 'Proxy Country',
				name: 'proxy_country',
				type: 'options',
				default: '',
				options: [
					{
						name: 'Czech Republic',
						value: 'cz',
					},
					{
						name: 'France',
						value: 'fr',
					},
					{
						name: 'Germany',
						value: 'de',
					},
					{
						name: 'Hungary',
						value: 'hu',
					},
					{
						name: 'Italy',
						value: 'it',
					},
					{
						name: 'None',
						value: '',
					},
					{
						name: 'Poland',
						value: 'pl',
					},
					{
						name: 'Romania',
						value: 'ro',
					},
					{
						name: 'Slovakia',
						value: 'sk',
					},
					{
						name: 'Spain',
						value: 'es',
					},
					{
						name: 'Ukraine',
						value: 'ua',
					},
					{
						name: 'United Kingdom',
						value: 'uk',
					},
					{
						name: 'United States',
						value: 'us',
					},
				],
			},
		],
	},
];
