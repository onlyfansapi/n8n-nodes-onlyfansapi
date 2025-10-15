import type { INodeProperties } from 'n8n-workflow';
import { userListsAddUsersToUserListDescription } from './addUsersToUserList';
import { userListsCreateDescription } from './create';
import { userListsDeleteDescription } from './delete';
import { userListsGetDescription } from './get';
import { userListsGetAllDescription } from './getAll';
import { userListsGetUsersInListDescription } from './getUsersInList';
import { userListsRemoveUserFromUserListDescription } from './removeUserFromUserList';
import { userListsUpdateDescription } from './update';

const showOnlyForUserLists = {
	resource: ['userLists'],
};

export const userListsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForUserLists,
		},
		options: [
			{
				name: 'Add Users to User List',
				value: 'addUsersToUserList',
				action: 'Add users to user list',
				description: 'Add multiple Users To OnlyFans User List',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/user-lists/{{$parameter.userListId}}/users',
						body: {
							user_ids: '={{$parameter.user_ids}}',
						},
					},
				},
			},
			{
				name: 'Create User List',
				value: 'create',
				action: 'Create user list',
				description: 'Create a OnlyFans User List',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/user-lists',
						body: {
							name: '={{$parameter.name}}',
						},
					},
				},
			},
			{
				name: 'Delete User List',
				value: 'delete',
				action: 'Delete user list',
				description: 'Delete a OnlyFans User List',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{$parameter.accountId}}/user-lists/{{$parameter.userListId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get user list',
				description: 'Get a single user list',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/user-lists/{{$parameter.userListId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get user lists',
				description: 'Get a list of OnlyFans Collections - User Lists',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/user-lists',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
						},
					},
				},
			},
			{
				name: 'Get Users in List',
				value: 'getUsersInList',
				action: 'Get users in list',
				description: 'Get all users in a OnlyFans user list',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/user-lists/{{$parameter.userListId}}/users',
					},
				},
			},
			{
				name: 'Remove User From a User List',
				value: 'removeUserFromUserList',
				action: 'Remove user from user list',
				description: 'Remove User from OnlyFans User List',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{$parameter.accountId}}/user-lists/{{$parameter.userListId}}/users/{{$parameter.userId}}',
					},
				},
			},
			{
				name: 'Update User List',
				value: 'update',
				action: 'Update user list',
				description: 'Update a OnlyFans User List',
				routing: {
					request: {
						method: 'PUT',
						url: '={{$parameter.accountId}}/user-lists/{{$parameter.userListId}}',
						body: {
							name: '={{$parameter.name}}',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...userListsAddUsersToUserListDescription,
	...userListsCreateDescription,
	...userListsDeleteDescription,
	...userListsGetDescription,
	...userListsGetAllDescription,
	...userListsGetUsersInListDescription,
	...userListsRemoveUserFromUserListDescription,
	...userListsUpdateDescription,
];
