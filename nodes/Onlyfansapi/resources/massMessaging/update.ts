import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, massMessageIdParameter } from './sharedParameters';

export const massMessagingUpdateDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['update'],
			},
		},
	},
	{
		...massMessageIdParameter,
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['update'],
			},
		},
		description: 'The message text content',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Locked Text',
				name: 'lockedText',
				type: 'boolean',
				default: false,
				description: 'Whether the text should be shown or hidden',
			},
			{
				displayName: 'Media Files',
				name: 'mediaFiles',
				type: 'json',
				default: '[]',
				description: 'Array of media file upload prefixed_ids, or OF media IDs (required if price is not 0). Will be hidden if price is provided.',
			},
			{
				displayName: 'Previews',
				name: 'previews',
				type: 'json',
				default: '[]',
				description: 'Array of media file upload prefixed_ids, or OF media IDs. Will be shown if price is provided. All previews values must also exist in the mediaFiles array.',
			},
			{
				displayName: 'Price',
				name: 'price',
				type: 'number',
				default: 0,
				description: 'Price for paid content (0 or between 3-200). In case this is not zero, mediaFiles is required.',
				typeOptions: {
					minValue: 0,
					maxValue: 200,
				},
			},
			{
				displayName: 'Scheduled Date',
				name: 'scheduledDate',
				type: 'dateTime',
				default: '',
				description: 'Schedule the chat message in the future (UTC timezone)',
			},
			{
				displayName: 'User IDs',
				name: 'userIds',
				type: 'json',
				default: '[]',
				description: 'Array of user IDs that the mass message will be sent to',
			},
			{
				displayName: 'User Lists',
				name: 'userLists',
				type: 'json',
				default: '[]',
				description: 'Array of user list IDs that the mass message will be sent to',
			},
		],
	},
];
