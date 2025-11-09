import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listLatestFansResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Start Date for Filtering (Required with End_date)',
			name: 'start_date',
			type: 'string',
			default: '2024-01-01',
		},
		{
			displayName: 'End Date for Filtering (Required with Start_date)',
			name: 'end_date',
			type: 'string',
			default: '2024-12-31',
		},
		{
			displayName: 'Filter by Type: Total, Renew, or New',
			name: 'type',
			type: 'string',
			default: 'total',
		},
		{
			displayName: 'Number of Fans to Skip',
			name: 'offset',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Number of Fans to Return (1-100)',
			name: 'limit',
			type: 'string',
			default: '50',
		},
		{
			displayName: 'This Field Is Required when <Code>end_date</code> Is Present',
			name: 'start_date',
			type: 'string',
			default: '',
		},
		{
			displayName: 'This Field Is Required when <Code>start_date</code> Is Present',
			name: 'end_date',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: 'total',
		},
		{
			displayName: 'Must Be at Least 0',
			name: 'offset',
			type: 'number',
			default: 12,
		},
		{
			displayName: 'Must Be at Least 1',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
		},
];

export const listLatestFansOperation = {
	name: 'listLatestFans',
	displayName: 'List Latest Fans',
	method: 'GET' as const,
	parameters: listLatestFansResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

