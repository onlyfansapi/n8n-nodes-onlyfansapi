import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listTrackingLinksResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when listing tracking links',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'string',
				default: '',
				description: 'The end date for tracking links. Keep empty to get all.',
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
				description: 'Offset used for pagination. Default 0.',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: 'desc',
				description: 'Sort the results. Default desc.',
			},
			{
				displayName: 'Sort By',
				name: 'sortby',
				type: 'string',
				default: 'claims',
				description: 'Sort by subscriber count (claims) or creation date',
			},
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'string',
				default: '',
				description: 'The start date for tracking links. Keep empty to get all.',
			},
			{
				displayName: 'Synchronous',
				name: 'synchronous',
				type: 'boolean',
				default: false,
				description: 'Whether to wait for revenue data to finish processing instead of background processing',
			},
			{
				displayName: 'With Deleted',
				name: 'with_deleted',
				type: 'boolean',
				default: false,
				description: 'Whether to include deleted tracking links in the response. Default false.',
			},
		],
	},
];

export const listTrackingLinksOperation = {
	name: 'listTrackingLinks',
	displayName: 'List Tracking Links',
	method: 'GET' as const,
	parameters: listTrackingLinksResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const createTrackingLinkResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Name of the Tracking Link',
			name: 'name',
			type: 'string',
			default: 'Twitter bio',
			required: true,
			description: 'The name of the Tracking Link',
		},
];

export const createTrackingLinkOperation = {
	name: 'createTrackingLink',
	displayName: 'Create Tracking Link',
	method: 'POST' as const,
	parameters: createTrackingLinkResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

