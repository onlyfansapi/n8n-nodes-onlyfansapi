import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter } from './sharedParameters';

export const postsUpdateDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['update'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Label IDs',
				name: 'labelIds',
				type: 'string',
				default: '',
				description: 'Array of OnlyFans label IDs (comma-separated)',
			},
			{
				displayName: 'Media Files',
				name: 'mediaFiles',
				type: 'string',
				default: '',
				description: 'Array of OnlyFans media IDs or ofapi_media_ IDs (comma-separated)',
			},
			{
				displayName: 'Price',
				name: 'price',
				type: 'number',
				default: 0,
				description: 'Price for paid content (0 or between 3-100)',
			},
			{
				displayName: 'Save For Later',
				name: 'saveForLater',
				type: 'boolean',
				default: false,
				description: 'Whether to add your post to the "Saved for later" queue',
			},
			{
				displayName: 'Scheduled Date',
				name: 'scheduledDate',
				type: 'string',
				default: '',
				description: 'Schedule your post in the future (UTC timezone)',
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'The post text content',
			},
		],
	},
];

