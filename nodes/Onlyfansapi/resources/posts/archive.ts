import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter } from './sharedParameters';

export const postsArchiveDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['archive'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['archive'],
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
				resource: ['posts'],
				operation: ['archive'],
			},
		},
		options: [
			{
				displayName: 'Private Archive',
				name: 'private_archive',
				type: 'boolean',
				default: false,
				description: 'Whether to move this post to the Private Archive',
			},
		],
	},
];

