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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when listing posts',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Include Counters',
				name: 'counters',
				type: 'boolean',
				default: true,
				description: 'Whether to include an array of counters',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
			},
			{
				displayName: 'Minimum Publish Date',
				name: 'minimumPublishDate',
				type: 'string',
				default: '',
				description: 'Filter posts by minimum publish date',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of posts to skip for pagination',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'string',
				default: 'publish_date',
				description: 'Order the returned posts (default publish_date)',
			},
			{
				displayName: 'Pinned Only',
				name: 'pinned',
				type: 'boolean',
				default: true,
				description: 'Whether to only show pinned posts',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query to filter posts',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: 'desc',
				description: 'Sort the returned posts (default desc)',
			},
		],
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when sending a post',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Expire Days',
				name: 'expireDays',
				type: 'number',
				default: 0,
				description: 'Number of days after which the post will expire (1, 3, 7, or 30). Empty for no expiration.',
			},
			{
				displayName: 'Fundraising Target Amount',
				name: 'fundRaisingTargetAmount',
				type: 'number',
				default: 0,
				description: 'Add a fundraising target to your post; must be at least 10 when present',
			},
			{
				displayName: 'Fundraising Tips Presets',
				name: 'fundRaisingTipsPresets',
				type: 'string',
				default: '',
				description: 'Tip amounts shown under the fundraising card; required with fundRaisingTargetAmount',
			},
			{
				displayName: 'Label IDs',
				name: 'labelIds',
				type: 'string',
				default: '',
				description: 'Array of OF label IDs. Refer to the /posts/labels endpoint.',
			},
			{
				displayName: 'Media Files',
				name: 'mediaFiles',
				type: 'string',
				default: '',
				description: 'Array of OFAPI ofapi_media_ IDs, or OF media IDs',
			},
			{
				displayName: 'Previews',
				name: 'previews',
				type: 'string',
				default: '',
				description: 'Array of media IDs to show as previews; must also exist in mediaFiles',
			},
			{
				displayName: 'Save For Later',
				name: 'saveForLater',
				type: 'boolean',
				default: false,
				description: 'Whether to add your post to the "Saved for Later" queue',
			},
			{
				displayName: 'Scheduled Date',
				name: 'scheduledDate',
				type: 'string',
				default: '',
				description: 'Schedule your post in the future (UTC timezone)',
			},
			{
				displayName: 'Tagged User IDs',
				name: 'rfTag',
				type: 'string',
				default: '',
				description: 'Array of OnlyFans creator user IDs to tag in your post',
			},
			{
				displayName: 'Voting Correct Index',
				name: 'votingCorrectIndex',
				type: 'number',
				default: 0,
				description: 'Array key of your quiz\' correct answer; required when votingType is quiz (arrays start at 0)',
			},
			{
				displayName: 'Voting Due',
				name: 'votingDue',
				type: 'number',
				default: 0,
				description: 'Due date (in days) of your poll/quiz (1, 3, 7 or 30). Only with votingType.',
			},
			{
				displayName: 'Voting Options',
				name: 'votingOptions',
				type: 'string',
				default: '',
				description: 'Options of your poll/quiz. Required with votingType.',
			},
			{
				displayName: 'Voting Type',
				name: 'votingType',
				type: 'string',
				default: '',
				description: 'Include a poll or quiz within your post',
			},
		],
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

