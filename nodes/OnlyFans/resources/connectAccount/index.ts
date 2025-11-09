import type { EndpointResource } from '../index';

import { startAuthenticationOperation } from './authenticate';

export const authenticateResource: EndpointResource = {
	name: 'authenticate',
	displayName: 'Authenticate',
	description: 'Start the authentication process for a new account. Our systems will bypass Captcha and also ask you for 2FA code if required. All credentials are stored securely using bcrypt and only used during login.',
	endpoint: '/authenticate',
	operations: [startAuthenticationOperation],
};

import { pollAuthenticationStatusOperation, submit2FAOperation  } from './attemptId';

export const attemptIdResource: EndpointResource = {
	name: 'attemptId',
	displayName: '{Attempt Id}',
	description: 'Poll the status of the authentication process. Eg. if 2FA is required, we will ask you for the code using the `twoFactorPending = true` in the response body.',
	endpoint: '/authenticate/{attempt_id}',
	operations: [pollAuthenticationStatusOperation, submit2FAOperation],
};

import { reAuthenticateAccountOperation } from './reauthenticate';

export const reauthenticateResource: EndpointResource = {
	name: 'reauthenticate',
	displayName: 'Reauthenticate',
	description: 'Trigger account reauthentication without the need to submit email & password again.',
	endpoint: '/authenticate/{account_id}/reauthenticate',
	operations: [reAuthenticateAccountOperation],
};

export const connectAccountResources: EndpointResource[] = [
	authenticateResource,
	attemptIdResource,
	reauthenticateResource
];
