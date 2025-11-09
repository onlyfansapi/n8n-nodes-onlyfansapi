import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listAllFansResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Number of Fans to Return (1-50)',
			name: 'limit',
			type: 'string',
			default: '20',
		},
		{
			displayName: 'Number of Fans to Skip',
			name: 'offset',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Filter by Fan Type',
			name: 'type',
			type: 'string',
			default: 'active',
		},
		{
			displayName: 'Filter',
			name: 'filter',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Filter by Online Status (1 for Online)',
			name: 'filter.online',
			type: 'string',
			default: '1',
		},
		{
			displayName: 'Filter by Minimum Total Spent',
			name: 'filter.total_spent',
			type: 'string',
			default: '100',
		},
		{
			displayName: 'Filter by Minimum Tips',
			name: 'filter.tips',
			type: 'string',
			default: '50',
		},
		{
			displayName: 'Filter by Minimum Subscription Duration (Days)',
			name: 'filter.duration',
			type: 'string',
			default: '30',
		},
];

export const listAllFansOperation = {
	name: 'listAllFans',
	displayName: 'List All Fans',
	method: 'GET' as const,
	parameters: listAllFansResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

