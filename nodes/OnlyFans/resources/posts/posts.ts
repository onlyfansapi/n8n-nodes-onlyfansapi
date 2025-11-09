import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listPostsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Search Query to Filter Posts',
			name: 'query',
			type: 'string',
			default: 'Hello',
		},
		{
			displayName: 'Number of Posts to Return (Default = 10)',
			name: 'limit',
			type: 'number',
			description: 'Max number of results to return',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
		},
		{
			displayName: 'Number of Posts to Skip for Pagination',
			name: 'offset',
			type: 'number',
			default: 0,
		},
		{
			displayName: 'Order the Returned Posts (Default = Publish_date)',
			name: 'order',
			type: 'string',
			default: 'publish_date',
		},
		{
			displayName: 'Sort the Returned Posts (Default = Desc)',
			name: 'sort',
			type: 'string',
			default: 'desc',
		},
		{
			displayName: 'Set to True to only Show Pinned Posts',
			name: 'pinned',
			type: 'boolean',
			default: true,
		},
		{
			displayName: 'Set to True to Include an Array of Counters (See Example Responses)',
			name: 'counters',
			type: 'boolean',
			default: true,
		},
		{
			displayName: 'Filter Posts by Minimum Publish Date',
			name: 'minimumPublishDate',
			type: 'string',
			default: '2025-06-26',
		},
];

export const listPostsOperation = {
	name: 'listPosts',
	displayName: 'List Posts',
	method: 'GET' as const,
	parameters: listPostsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const sendPostResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
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
			displayName: 'Array of OFAPI `Ofapi_media_` IDs, or OF Media IDs',
			name: 'mediaFiles',
			type: 'string',
			default: 'ofapi_media_abc123,1234567890',
		},
		{
			displayName: 'Array of Media File Upload Prefixed_ids, or OF Media IDs (Required if Price Is Not 0)',
			name: 'previews',
			type: 'string',
			default: 'ofapi_media_abc123,1234567890',
			description: 'Array of media file upload prefixed_ids, or OF media IDs (required if price is not 0). Will be shown if `price` is provided. All `previews` values must also exist in the `mediaFiles` array.',
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

export const sendPostOperation = {
	name: 'sendPost',
	displayName: 'Send Post',
	method: 'POST' as const,
	parameters: sendPostResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

