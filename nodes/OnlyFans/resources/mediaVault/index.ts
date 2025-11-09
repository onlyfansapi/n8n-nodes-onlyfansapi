import type { EndpointResource } from '../index';

import { deleteVaultMediaOperation } from './deleteMedia';

export const deleteMediaResource: EndpointResource = {
	name: 'deleteMedia',
	displayName: 'Delete-Media',
	description: 'Delete one or multiple media from your vault.',
	endpoint: '/{account}/media/vault/delete-media',
	operations: [deleteVaultMediaOperation],
};

import { listVaultMediaOperation } from './vault';

export const vaultResource: EndpointResource = {
	name: 'vault',
	displayName: 'Vault',
	description: 'List media items stored in your vault. See how many likes and how much tips did they get.',
	endpoint: '/{account}/media/vault',
	operations: [listVaultMediaOperation],
};

import { getVaultMediaOperation } from './mediaId';

export const mediaIdResource: EndpointResource = {
	name: 'mediaId',
	displayName: '{Media Id}',
	description: 'Retrieve details about a specific media item in your vault.',
	endpoint: '/{account}/media/vault/{media_id}',
	operations: [getVaultMediaOperation],
};

export const mediaVaultResources: EndpointResource[] = [
	deleteMediaResource,
	vaultResource,
	mediaIdResource
];
