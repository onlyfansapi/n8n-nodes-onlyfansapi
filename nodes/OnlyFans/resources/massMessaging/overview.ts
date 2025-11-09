import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getMassMessageOverviewResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Earliest Mass Message to Retrieve',
			name: 'start_date',
			type: 'string',
			default: '2025-01-01 00:00:00',
			description: 'The earliest mass message to retrieve. Keep empty to get all.',
		},
		{
			displayName: 'The Latest Mass Message to Retrieve',
			name: 'end_date',
			type: 'string',
			default: '2025-03-31 23:59:59',
			description: 'The latest mass message to retrieve. Keep empty to get all.',
		},
		{
			displayName: 'Number of Mass Messages to Return (Default = 10)',
			name: 'limit',
			type: 'number',
			description: 'Max number of results to return',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
		},
		{
			displayName: 'Number of Mass Messages to Skip for Pagination',
			name: 'offset',
			type: 'number',
			default: 0,
		},
		{
			displayName: 'Optionally, Find a Mass Message by the Message Text',
			name: 'query',
			type: 'string',
			default: 'My message text',
		},
];

export const getMassMessageOverviewOperation = {
	name: 'getMassMessageOverview',
	displayName: 'Get Mass Message Overview',
	method: 'GET' as const,
	parameters: getMassMessageOverviewResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

