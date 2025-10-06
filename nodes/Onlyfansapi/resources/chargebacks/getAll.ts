import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, startDateParameter, endDateParameter } from './sharedParameters';

export const chargebacksGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chargebacks'],
				operation: ['getAll'],
			},
		},
	},
	{
		...startDateParameter,
		displayOptions: {
			show: {
				resource: ['chargebacks'],
				operation: ['getAll'],
			},
		},
	},
	{
		...endDateParameter,
		displayOptions: {
			show: {
				resource: ['chargebacks'],
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
				resource: ['chargebacks'],
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
					minValue: 1,
					maxValue: 100,
				},
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of chargebacks to skip, used for pagination',
			},
		],
	},
];
