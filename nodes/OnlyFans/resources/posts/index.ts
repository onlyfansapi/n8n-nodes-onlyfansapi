import type { EndpointResource } from '../index';

import { listPostsOperation, sendPostOperation  } from './posts';

export const postsResource: EndpointResource = {
	name: 'posts',
	displayName: 'Posts',
	description: 'Get posts from your OnlyFans account.',
	endpoint: '/{account}/posts',
	operations: [listPostsOperation, sendPostOperation],
};

import { getPostOperation, updatePostOperation , deletePostOperation  } from './postId';

export const postIdResource: EndpointResource = {
	name: 'postId',
	displayName: '{Post Id}',
	description: 'Retrieve details of a post from your account.',
	endpoint: '/{account}/posts/{post_id}',
	operations: [getPostOperation, updatePostOperation, deletePostOperation],
};

import { archivePostOperation } from './archive';

export const archiveResource: EndpointResource = {
	name: 'archive',
	displayName: 'Archive',
	description: 'Archive a post from your account. Also can be used to move posts between the Regular and Private Archive.',
	endpoint: '/{account}/posts/{post_id}/archive',
	operations: [archivePostOperation],
};

import { unarchivePostOperation } from './unarchive';

export const unarchiveResource: EndpointResource = {
	name: 'unarchive',
	displayName: 'Unarchive',
	description: 'Unarchive a post from your account.',
	endpoint: '/{account}/posts/{post_id}/unarchive',
	operations: [unarchivePostOperation],
};

import { pinUnpinPostOperation } from './pin';

export const pinResource: EndpointResource = {
	name: 'pin',
	displayName: 'Pin',
	description: 'Pin or unpin a post to your account.',
	endpoint: '/{account}/posts/{post_id}/pin',
	operations: [pinUnpinPostOperation],
};

import { showPostStatisticsOperation } from './stats';

export const statsResource: EndpointResource = {
	name: 'stats',
	displayName: 'Stats',
	description: 'Show the statistics of a post like purchases, views, likes, tips and more.',
	endpoint: '/{account}/posts/{post_id}/stats',
	operations: [showPostStatisticsOperation],
};

export const postsResources: EndpointResource[] = [
	postsResource,
	postIdResource,
	archiveResource,
	unarchiveResource,
	pinResource,
	statsResource
];
