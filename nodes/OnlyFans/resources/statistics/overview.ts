import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const statisticsOverviewResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Start Date for the Statistics',
			name: 'start_date',
			type: 'string',
			default: '2025-01-01 00:00:00',
			description: 'The start date for the statistics. Keep empty to retrieve from the model\'s start date.',
		},
		{
			displayName: 'The End Date for the Statistics',
			name: 'end_date',
			type: 'string',
			default: '2025-03-31 23:59:59',
			description: 'The end date for the statistics. Keep empty to retrieve until now.',
		},
		{
			displayName: 'The Type of Statistics to Retrieve (Default = Empty)',
			name: 'type',
			type: 'string',
			default: 'fans',
			description: 'The type of statistics to retrieve (default = empty)',
		},
];

export const statisticsOverviewOperation = {
	name: 'statisticsOverview',
	displayName: 'Statistics Overview',
	method: 'GET' as const,
	parameters: statisticsOverviewResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

