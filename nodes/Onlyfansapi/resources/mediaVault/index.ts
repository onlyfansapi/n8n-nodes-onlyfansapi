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
						url: '={{$parameter.accountId}}/media/vault',
						body: {
							mediaIds: '={{$parameter.mediaIds}}',
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
						url: '={{$parameter.accountId}}/media/vault',
						qs: {
							query: '={{$parameter.options.query}}',
							field: '={{$parameter.options.field}}',
							type: '={{$parameter.options.type}}',
							list: '={{$parameter.options.list}}',
							sort: '={{$parameter.options.sort}}',
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
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
