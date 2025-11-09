import type { EndpointResource } from '../index';

import { listVaultListsOperation, createVaultListOperation  } from './lists';

export const listsResource: EndpointResource = {
	name: 'lists',
	displayName: 'Lists',
	description: 'List your Vault lists (categories).',
	endpoint: '/{account}/media/vault/lists',
	operations: [listVaultListsOperation, createVaultListOperation],
};

import { showVaultListOperation, renameVaultListOperation , deleteVaultListOperation  } from './listId';

export const listIdResource: EndpointResource = {
	name: 'listId',
	displayName: '{List Id}',
	description: 'Show a Vault list.',
	endpoint: '/{account}/media/vault/lists/{list_id}',
	operations: [showVaultListOperation, renameVaultListOperation, deleteVaultListOperation],
};

import { addMediaToListOperation, removeMediaFromListOperation  } from './media';

export const mediaResource: EndpointResource = {
	name: 'media',
	displayName: 'Media',
	description: 'Add one or multiple media to a list.',
	endpoint: '/{account}/media/vault/lists/{list_id}/media',
	operations: [addMediaToListOperation, removeMediaFromListOperation],
};

export const mediaVaultListsResources: EndpointResource[] = [
	listsResource,
	listIdResource,
	mediaResource
];
