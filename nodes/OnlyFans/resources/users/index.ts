import type { EndpointResource } from '../index';

import { getUserDetailsOperation } from './username';

export const usernameResource: EndpointResource = {
	name: 'username',
	displayName: '{Username}',
	description: 'Get OnlyFans Profile details for a given username. User details are retrieved using the current current `{account}` so fields like `subscribedOnData` which include potential subscription details will be included.',
	endpoint: '/{account}/users/{username}',
	operations: [getUserDetailsOperation],
};

import { restrictUserOperation, unrestrictUserOperation  } from './restrict';

export const restrictResource: EndpointResource = {
	name: 'restrict',
	displayName: 'Restrict',
	description: 'Restrict a user. You will not see messages or comments from this them.',
	endpoint: '/{account}/users/{user_id}/restrict',
	operations: [restrictUserOperation, unrestrictUserOperation],
};

import { blockUserOperation, unblockUserOperation  } from './block';

export const blockResource: EndpointResource = {
	name: 'block',
	displayName: 'Block',
	description: 'Block user from accessing your profile.',
	endpoint: '/{account}/users/{user_id}/block',
	operations: [blockUserOperation, unblockUserOperation],
};

export const usersResources: EndpointResource[] = [
	usernameResource,
	restrictResource,
	blockResource
];
