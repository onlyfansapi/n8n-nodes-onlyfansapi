import type { EndpointResource } from '../index';

import { listSavedForLaterPostsOperation } from './posts';

export const postsResource: EndpointResource = {
	name: 'posts',
	displayName: 'Posts',
	description: 'List all posts that are marked as "Save For Later".',
	endpoint: '/{account}/saved-for-later/posts',
	operations: [listSavedForLaterPostsOperation],
};

import { getPostSettingsOperation } from './settings';

export const settingsResource: EndpointResource = {
	name: 'settings',
	displayName: 'Settings',
	description: 'Get the Saved For Later post settings.',
	endpoint: '/{account}/saved-for-later/posts/settings',
	operations: [getPostSettingsOperation],
};

import { enableUpdateAutomaticPostingOperation } from './enableOrUpdateAutomaticPosting';

export const enableOrUpdateAutomaticPostingResource: EndpointResource = {
	name: 'enableOrUpdateAutomaticPosting',
	displayName: 'Enable-Or-Update-Automatic-Posting',
	description: 'Enable or update automatic posting of Saved For Later posts.',
	endpoint: '/{account}/saved-for-later/posts/settings/enable-or-update-automatic-posting',
	operations: [enableUpdateAutomaticPostingOperation],
};

import { disableAutomaticPostingOperation } from './disableAutomaticPosting';

export const disableAutomaticPostingResource: EndpointResource = {
	name: 'disableAutomaticPosting',
	displayName: 'Disable-Automatic-Posting',
	description: 'Disable automatic posting of Saved For Later posts.',
	endpoint: '/{account}/saved-for-later/posts/settings/disable-automatic-posting',
	operations: [disableAutomaticPostingOperation],
};

export const savedForLaterPostsResources: EndpointResource[] = [
	postsResource,
	settingsResource,
	enableOrUpdateAutomaticPostingResource,
	disableAutomaticPostingResource
];
