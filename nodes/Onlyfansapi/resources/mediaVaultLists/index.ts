import type { INodeProperties } from 'n8n-workflow';
import { mediaVaultListsAddMediaToListDescription } from './addMediaToList';
import { mediaVaultListsCreateDescription } from './create';
import { mediaVaultListsDeleteDescription } from './delete';
import { mediaVaultListsGetDescription } from './get';
import { mediaVaultListsGetAllDescription } from './getAll';
import { mediaVaultListsRemoveMediaFromListDescription } from './removeMediaFromList';
import { mediaVaultListsRenameDescription } from './rename';

const showOnlyForMediaVaultLists = {
	resource: ['mediaVaultLists'],
};

export const mediaVaultListsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMediaVaultLists,
		},
		options: [
			{
				name: 'Add Media To List',
				value: 'addMediaToList',
				action: 'Add media to list',
				description: 'Add one or multiple media to a list',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/media/vault/lists/{{$parameter.listId}}/media',
						body: {
							mediaIds: '{{.mediaIds}}',
						},
					},
				},
			},
			{
				name: 'Create Vault List',
				value: 'create',
				action: 'Create vault list',
				description: 'Create a new Vault list',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/media/vault/lists',
						body: {
							name: '{{.name}}',
						},
					},
				},
			},
			{
				name: 'Delete Vault List',
				value: 'delete',
				action: 'Delete vault list',
				description: 'Delete a Vault list',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/media/vault/lists/{{$parameter.listId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List vault lists',
				description: 'List your Vault lists (categories)',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/media/vault/lists',
						qs: {
							query: '{{.options.query}}',
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
						},
					},
				},
			},
			{
				name: 'Remove Media From List',
				value: 'removeMediaFromList',
				action: 'Remove media from list',
				description: 'Remove one or multiple media from a list',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/media/vault/lists/{{$parameter.listId}}/media',
						body: {
							mediaIds: '{{.mediaIds}}',
						},
					},
				},
			},
			{
				name: 'Rename Vault List',
				value: 'rename',
				action: 'Rename vault list',
				description: 'Rename a Vault list',
				routing: {
					request: {
						method: 'PUT',
						url: '{{.accountId}}/media/vault/lists/{{$parameter.listId}}',
						body: {
							name: '{{.name}}',
						},
					},
				},
			},
			{
				name: 'Show Vault List',
				value: 'get',
				action: 'Show vault list',
				description: 'Show a Vault list',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/media/vault/lists/{{$parameter.listId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...mediaVaultListsAddMediaToListDescription,
	...mediaVaultListsCreateDescription,
	...mediaVaultListsDeleteDescription,
	...mediaVaultListsGetDescription,
	...mediaVaultListsGetAllDescription,
	...mediaVaultListsRemoveMediaFromListDescription,
	...mediaVaultListsRenameDescription,
];
