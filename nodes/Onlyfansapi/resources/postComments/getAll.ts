import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter } from './sharedParameters';

export const postCommentsGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['getAll'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
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
				resource: ['postComments'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 10,
				description: 'Number of comments to return',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of comments to skip for pagination',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'options',
				default: 'desc',
				options: [
					{
						name: 'Descending',
						value: 'desc',
					},
					{
						name: 'Ascending',
						value: 'asc',
					},
				],
				description: 'Sort the returned comments',
			},
		],
	},
];

