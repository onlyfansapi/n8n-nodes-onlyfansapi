import type { INodeProperties } from 'n8n-workflow';

export { accountIdParameter } from '../sharedParameters';

export const fansOptionsParameter: INodeProperties = {
	displayName: 'Options',
	name: 'options',
	type: 'collection',
	placeholder: 'Add Option',
	default: {},
	options: [
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			default: 50,
			description: 'Max number of results to return',
			typeOptions: {
				minValue: 1,
				maxValue: 50,
			},
		},
		{
			displayName: 'Offset',
			name: 'offset',
			type: 'number',
			default: 0,
			description: 'Number of fans to skip',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Filter by fan type',
		},
	],
};

export const fansFilterParameter: INodeProperties = {
	displayName: 'Filters',
	name: 'filters',
	type: 'collection',
	placeholder: 'Add Filter',
	default: {},
	options: [
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'number',
			default: '',
			description: 'Filter by minimum subscription duration (days)',
		},
		{
			displayName: 'Online',
			name: 'online',
			type: 'boolean',
			default: false,
			description: 'Whether to filter by online status',
		},
		{
			displayName: 'Tips',
			name: 'tips',
			type: 'number',
			default: '',
			description: 'Filter by minimum tips',
		},
		{
			displayName: 'Total Spent',
			name: 'total_spent',
			type: 'number',
			default: '',
			description: 'Filter by minimum total spent',
		},
	],
};
