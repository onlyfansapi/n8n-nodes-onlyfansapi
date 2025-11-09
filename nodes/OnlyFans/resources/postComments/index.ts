import type { EndpointResource } from '../index';

import { listPostCommentsOperation, createPostCommentOperation  } from './comments';

export const commentsResource: EndpointResource = {
	name: 'comments',
	displayName: 'Comments',
	description: 'Get comments from one of your posts.',
	endpoint: '/{account}/posts/{post_id}/comments',
	operations: [listPostCommentsOperation, createPostCommentOperation],
};

import { deletePostCommentOperation } from './commentId';

export const commentIdResource: EndpointResource = {
	name: 'commentId',
	displayName: '{Comment Id}',
	description: 'Delete a comment on one of your posts.',
	endpoint: '/{account}/posts/{post_id}/comments/{comment_id}',
	operations: [deletePostCommentOperation],
};

import { pinPostCommentOperation, unpinPostCommentOperation  } from './pin';

export const pinResource: EndpointResource = {
	name: 'pin',
	displayName: 'Pin',
	description: 'Pin a comment on one of your posts.',
	endpoint: '/{account}/posts/{post_id}/comments/{comment_id}/pin',
	operations: [pinPostCommentOperation, unpinPostCommentOperation],
};

import { likePostCommentOperation, unlikePostCommentOperation  } from './like';

export const likeResource: EndpointResource = {
	name: 'like',
	displayName: 'Like',
	description: 'Like a comment on one of your posts.',
	endpoint: '/{account}/posts/{post_id}/comments/{comment_id}/like',
	operations: [likePostCommentOperation, unlikePostCommentOperation],
};

export const postCommentsResources: EndpointResource[] = [
	commentsResource,
	commentIdResource,
	pinResource,
	likeResource
];
