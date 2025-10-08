import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const userListsGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
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
				resource: ['userLists'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 10,
					maxValue: 50,
				},
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of results to skip',
				typeOptions: {
					minValue: 0,
				},
			},
		],
	},
];
