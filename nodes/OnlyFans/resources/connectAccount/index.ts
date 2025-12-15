import type { EndpointResource } from '../index';

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
	attemptIdResource,
	reauthenticateResource
];
