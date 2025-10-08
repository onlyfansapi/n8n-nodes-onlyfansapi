import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter } from './sharedParameters';

export const chatsListChatMediaGalleryDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chats'],
				operation: ['listChatMediaGallery'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chats'],
				operation: ['listChatMediaGallery'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['chats'],
				operation: ['listChatMediaGallery'],
			},
		},
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: '',
				options: [
					{
						name: 'All',
						value: '',
					},
					{
						name: 'Photos',
						value: 'photos',
					},
					{
						name: 'Videos',
						value: 'videos',
					},
					{
						name: 'Audios',
						value: 'audios',
					},
				],
				description: 'Filter by specific media types. Keep empty to return all.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of medias to skip for pagination',
			},
			{
				displayName: 'Skip Users',
				name: 'skip_users',
				type: 'options',
				default: 'all',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'None',
						value: 'none',
					},
				],
				description: 'Whether to skip user details in response. Default = all.',
			},
		],
	},
];
