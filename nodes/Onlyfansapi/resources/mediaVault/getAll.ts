import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const mediaVaultGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVault'],
				operation: ['getAll'],
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
				resource: ['mediaVault'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Field',
				name: 'field',
				type: 'options',
				default: 'recent',
				options: [
					{
						name: 'Highest Tips',
						value: 'highest-tips',
					},
					{
						name: 'Most Liked',
						value: 'most-liked',
					},
					{
						name: 'Recent',
						value: 'recent',
					},
				],
				description: 'Sort the results by a field. Default recent.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
				},
			},
			{
				displayName: 'List',
				name: 'list',
				type: 'number',
				default: '',
				description: 'Only show media items from a specific list (category). Refer to Media Vault Lists endpoints.',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'The offset used for pagination',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Optionally, search for a text query',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'options',
				default: 'desc',
				options: [
					{
						name: 'Ascending',
						value: 'asc',
					},
					{
						name: 'Descending',
						value: 'desc',
					},
				],
				description: 'Sort the results. Default desc.',
			},
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
						name: 'Audio',
						value: 'audio',
					},
					{
						name: 'GIF',
						value: 'gif',
					},
					{
						name: 'Photo',
						value: 'photo',
					},
					{
						name: 'Video',
						value: 'video',
					},
				],
				description: 'Filter the results by a media type. Keep empty to show all media.',
			},
		],
	},
];
