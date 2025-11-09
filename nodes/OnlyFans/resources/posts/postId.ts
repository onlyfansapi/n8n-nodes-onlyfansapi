import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getPostResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Post ID',
			name: 'post_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The post ID',
		},
];

export const getPostOperation = {
	name: 'getPost',
	displayName: 'Get Post',
	method: 'GET' as const,
	parameters: getPostResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const updatePostResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Post ID',
			name: 'post_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The post ID',
		},
		{
			displayName: 'The Post Text Content',
			name: 'text',
			type: 'string',
			default: 'Hello!',
			required: true,
			description: 'The post text content',
		},
		{
			displayName: 'Array of OF Label IDs',
			name: 'labelIds',
			type: 'string',
			default: '123',
			description: 'Array of OF label IDs. Refer to our `/posts/labels` endpoint.',
		},
		{
			displayName: 'Price for Paid Content (0 or Between 3-100)',
			name: 'price',
			type: 'number',
			default: 10,
			description: 'Price for paid content (0 or between 3-100). In case this is not zero, **mediaFiles** is required.',
		},
		{
			displayName: 'Array of OFAPI `Ofapi_media_` IDs, or OF Media IDs',
			name: 'mediaFiles',
			type: 'string',
			default: 'ofapi_media_abc123,1234567890',
		},
		{
			displayName: 'Array OnlyFans Creator User IDs to Tag in Your Post',
			name: 'rfTag',
			type: 'string',
			default: '123',
		},
		{
			displayName: 'Number of Days After Which the Post Will Expire',
			name: 'expireDays',
			type: 'number',
			default: 3,
			description: 'Number of days after which the post will expire. Can be 1, 3, 7 or 30 days. Keep empty for no expiration.',
		},
		{
			displayName: 'Schedule Your Post in the Future (UTC Timezone)',
			name: 'scheduledDate',
			type: 'string',
			default: '2025-01-01T00:00:00.000Z',
		},
		{
			displayName: 'Add Your Post to the "Saved for Later" Queue',
			name: 'saveForLater',
			type: 'boolean',
			default: true,
		},
		{
			displayName: 'Add a Fundraising Target to Your Post',
			name: 'fundRaisingTargetAmount',
			type: 'number',
			default: 30,
			description: 'Add a fundraising target to your post. If present, value must be at least 10.',
		},
		{
			displayName: 'Specify Which Tip Amounts Will Be Listed Under the Fundraising Card',
			name: 'fundRaisingTipsPresets',
			type: 'string',
			default: '5,10,15',
			description: 'Specify which tip amounts will be listed under the fundraising card. Required with `fundRaisingTargetAmount`, and you must provide at least 1 option. Array items cannot be higher than the `fundRaisingTargetAmount`.',
		},
		{
			displayName: 'Include a Poll or Quiz Within Your Post',
			name: 'votingType',
			type: 'string',
			default: 'poll',
		},
		{
			displayName: 'The Due Date (in Days) of Your Poll/quiz',
			name: 'votingDue',
			type: 'number',
			default: 3,
			description: 'The due date (in days) of your poll/quiz. Can be 1, 3, 7 or 30 days. Can only be filled with `votingType`.',
		},
		{
			displayName: 'The Options of Your Poll/quiz',
			name: 'votingOptions',
			type: 'string',
			default: 'First option,Second option',
			description: 'The options of your poll/quiz. Required with `votingType`.',
		},
		{
			displayName: 'The Array Key of Your Quiz\' Correct Answer',
			name: 'votingCorrectIndex',
			type: 'number',
			default: 0,
			description: 'The array key of your quiz\' correct answer. Required when `votingType` is "quiz". Keep in mind that arrays start at `0`',
		},
];

export const updatePostOperation = {
	name: 'updatePost',
	displayName: 'Update Post',
	method: 'PUT' as const,
	parameters: updatePostResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const deletePostResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Post ID',
			name: 'post_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The post ID',
		},
];

export const deletePostOperation = {
	name: 'deletePost',
	displayName: 'Delete Post',
	method: 'DELETE' as const,
	parameters: deletePostResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

