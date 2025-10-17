import type { INodeProperties } from 'n8n-workflow';
import { connectOnlyfansAccountPollAuthenticationStatusDescription } from './pollAuthenticationStatus';
import { connectOnlyfansAccountReAuthenticateAccountDescription } from './reAuthenticateAccount';
import { connectOnlyfansAccountStartAuthenticationDescription } from './startAuthentication';
import { connectOnlyfansAccountSubmit2FADescription } from './submit2FA';

const showOnlyForConnectOnlyfansAccount = {
	resource: ['connectOnlyfansAccount'],
};

export const connectOnlyfansAccountDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForConnectOnlyfansAccount,
		},
		options: [
			{
				name: 'Poll Authentication Status',
				value: 'pollAuthenticationStatus',
				action: 'Poll authentication status',
				description:
					'Poll the status of the authentication process. Eg. if 2FA is required, we will ask you for the code using the `twoFactorPending = true` in the response body',
				routing: {
					request: {
						method: 'GET',
						url: '=/authenticate/{{$parameter.attemptId}}',
					},
				},
			},
			{
				name: 'Re-Authenticate Account',
				value: 'reAuthenticateAccount',
				action: 'Re authenticate account',
				description: 'Trigger account reauthentication without the need to submit email & password again',
				routing: {
					request: {
						method: 'POST',
						url: '=/authenticate/{{$parameter.accountId}}/reauthenticate',
					},
				},
			},
			{
				name: 'Start Authentication',
				value: 'startAuthentication',
				action: 'Start authentication',
				description:
					'Start the authentication process for a new account. Our systems will bypass Captcha and also ask you for 2FA code if required. All credentials are stored securely using bcrypt and only used during login',
				routing: {
					request: {
						method: 'POST',
						url: '/authenticate',
						body: {
							email: '{{.email}}',
							password: '{{.password}}',
							proxyCountry: '{{.proxyCountry}}',
						},
					},
				},
			},
			{
				name: 'Submit 2FA',
				value: 'submit2FA',
				action: 'Submit 2FA',
				description: 'Submit the 2FA code for the authentication process',
				routing: {
					request: {
						method: 'PUT',
						url: '=/authenticate/{{$parameter.attemptId}}',
						body: {
							code: '{{.code}}',
						},
					},
				},
			},
		],
		default: 'startAuthentication',
	},
	...connectOnlyfansAccountPollAuthenticationStatusDescription,
	...connectOnlyfansAccountReAuthenticateAccountDescription,
	...connectOnlyfansAccountStartAuthenticationDescription,
	...connectOnlyfansAccountSubmit2FADescription,
];



