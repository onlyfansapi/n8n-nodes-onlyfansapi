import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listTrackingLinkSpendersResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Tracking Link ID',
			name: 'tracking_link_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The tracking link ID',
		},
		{
			displayName: 'The Number of Spenders to Return per Page',
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
			displayName: 'Minimal Spend of a Fan',
			name: 'minSpend',
			type: 'number',
			default: 1,
			description: 'Minimal spend of a fan. Default `1`. Must be at least 1.',
		},
];

export const listTrackingLinkSpendersOperation = {
	name: 'listTrackingLinkSpenders',
	displayName: 'List Tracking Link Spenders',
	method: 'GET' as const,
	parameters: listTrackingLinkSpendersResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

