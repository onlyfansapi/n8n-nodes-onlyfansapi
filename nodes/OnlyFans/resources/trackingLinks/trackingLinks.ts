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
			displayName: 'The Start Date for Tracking Links',
			name: 'startDate',
			type: 'string',
			default: '2025-01-01 00:00:00, -30days',
			description: 'The start date for Tracking Links. Keep empty to get all.',
		},
		{
			displayName: 'The End Date for Tracking Links',
			name: 'endDate',
			type: 'string',
			default: '2025-01-01 00:00:00, now',
			description: 'The end date for Tracking Links. Keep empty to get all.',
		},
		{
			displayName: 'Whether or Not to Include Deleted Tracking Links in the Response',
			name: 'with_deleted',
			type: 'boolean',
			default: false,
			description: 'Whether or not to include deleted tracking links in the response. Default `false`.',
		},
		{
			displayName: 'Sort by Subscriber Count (Claims), or Creation Date',
			name: 'sortby',
			type: 'string',
			default: 'claims',
		},
		{
			displayName: 'Sort the Results',
			name: 'sort',
			type: 'string',
			default: 'desc',
			description: 'Sort the results. Default `desc`.',
		},
		{
			displayName: 'The Number of Tracking Links to Return',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
		},
		{
			displayName: 'The Offset Used for Pagination',
			name: 'offset',
			type: 'number',
			default: 0,
			description: 'The offset used for pagination. Default `0`.',
		},
		{
			displayName: 'Wait for the Revenue Data to Finish Processing, Instead of Processing in the Background',
			name: 'synchronous',
			type: 'boolean',
			default: false,
			description: 'Whether to wait for the revenue data to finish processing, instead of processing in the background. **Will result in longer response times, use with caution**. Default `false`',
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

