import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listAllFollowingsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Number of Followings to Return (1-50)',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
		},
		{
			displayName: 'Pagination Offset',
			name: 'offset',
			type: 'number',
			default: 0,
			description: 'Pagination offset. Must be at least 0.',
		},
		{
			displayName: 'Filter',
			name: 'filter',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Filter by Online Status (1 for Online, 0 for Offline, Null for All)',
			name: 'filter.online',
			type: 'number',
			default: 1,
		},
		{
			displayName: 'Filter by Paid Status (1 for Paid, 0 for Free, Null for All)',
			name: 'filter.paid',
			type: 'number',
			default: 1,
		},
];

export const listAllFollowingsOperation = {
	name: 'listAllFollowings',
	displayName: 'List All Followings',
	method: 'GET' as const,
	parameters: listAllFollowingsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

