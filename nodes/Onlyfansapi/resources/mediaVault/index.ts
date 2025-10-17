import type { INodeProperties } from 'n8n-workflow';
import { mediaVaultDeleteDescription } from './delete';
import { mediaVaultGetAllDescription } from './getAll';

const showOnlyForMediaVault = {
	resource: ['mediaVault'],
};

export const mediaVaultDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMediaVault,
		},
		options: [
			{
				name: 'Delete Vault Media',
				value: 'delete',
				action: 'Delete vault media',
				description: 'Delete one or multiple media from your vault',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/media/vault',
						body: {
							mediaIds: '{{.mediaIds}}',
						},
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List vault media',
				description: 'List media items stored in your vault. See how many likes and how much tips did they get.',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/media/vault',
						qs: {
							query: '{{.options.query}}',
							field: '{{.options.field}}',
							type: '{{.options.type}}',
							list: '{{.options.list}}',
							sort: '{{.options.sort}}',
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...mediaVaultDeleteDescription,
	...mediaVaultGetAllDescription,
];
