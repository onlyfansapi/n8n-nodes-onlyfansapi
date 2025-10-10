import type { INodeProperties } from 'n8n-workflow';

export const connectOnlyfansAccountStartAuthenticationDescription: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['connectOnlyfansAccount'],
				operation: ['startAuthentication'],
			},
		},
		description: 'The email address of the OnlyFans account',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: true,
		typeOptions: { password: true },
		default: '',
		displayOptions: {
			show: {
				resource: ['connectOnlyfansAccount'],
				operation: ['startAuthentication'],
			},
		},
		description: 'The password of the OnlyFans account',
	},
	{
		displayName: 'Proxy Country',
		name: 'proxyCountry',
		type: 'options',
		required: true,
		default: 'us',
		displayOptions: {
			show: {
				resource: ['connectOnlyfansAccount'],
				operation: ['startAuthentication'],
			},
		},
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
		description: 'The country of the proxy server you want to use',
	},
];



