import type { EndpointResource } from '../index';

import { listUserListsOperation, createUserListOperation  } from './userLists';

export const userListsResource: EndpointResource = {
	name: 'userLists',
	displayName: 'User-Lists',
	description: 'Get a list of OnlyFans Collections - User Lists',
	endpoint: '/{account}/user-lists',
	operations: [listUserListsOperation, createUserListOperation],
};

import { getUserListOperation, updateUserListOperation , deleteUserListOperation  } from './userListId';

export const userListIdResource: EndpointResource = {
	name: 'userListId',
	displayName: '{UserListId}',
	description: 'Get a user list',
	endpoint: '/{account}/user-lists/{userListId}',
	operations: [getUserListOperation, updateUserListOperation, deleteUserListOperation],
};

import { listUserListUsersOperation, addUsersToUserListOperation , clearUserListOperation  } from './users';

export const usersResource: EndpointResource = {
	name: 'users',
	displayName: 'Users',
	description: 'Get all users in a OnlyFans User List',
	endpoint: '/{account}/user-lists/{userListId}/users',
	operations: [listUserListUsersOperation, addUsersToUserListOperation, clearUserListOperation],
};

import { removeUserFromAUserListOperation } from './userId';

export const userIdResource: EndpointResource = {
	name: 'userId',
	displayName: '{UserId}',
	description: 'Remove User from OnlyFans User List',
	endpoint: '/{account}/user-lists/{userListId}/users/{userId}',
	operations: [removeUserFromAUserListOperation],
};

export const userListCollectionsResources: EndpointResource[] = [
	userListsResource,
	userListIdResource,
	usersResource,
	userIdResource
];
