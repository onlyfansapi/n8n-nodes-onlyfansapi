import type { INodeProperties } from 'n8n-workflow';

export { accountIdParameter } from '../sharedParameters';

export const followingOptionsParameter: INodeProperties = {
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
			description: 'Number of followings to skip',
			typeOptions: {
				minValue: 0,
			},
		},
	],
};

export const followingFilterParameter: INodeProperties = {
	displayName: 'Filters',
	name: 'filters',
	type: 'collection',
	placeholder: 'Add Filter',
	default: {},
	options: [
		{
			displayName: 'Online',
			name: 'online',
			type: 'options',
			default: '',
			options: [
				{
					name: 'All',
					value: '',
				},
				{
					name: 'Offline',
					value: '0',
				},
				{
					name: 'Online',
					value: '1',
				},
			],
			description: 'Filter by online status',
		},
		{
			displayName: 'Paid',
			name: 'paid',
			type: 'options',
			default: '',
			options: [
				{
					name: 'All',
					value: '',
				},
				{
					name: 'Free',
					value: '0',
				},
				{
					name: 'Paid',
					value: '1',
				},
			],
			description: 'Filter by paid status',
		},
	],
};
