import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getProfileVisitorsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Start Date for the Period',
			name: 'start_date',
			type: 'string',
			default: '2025-01-01 00:00:00',
			required: true,
			description: 'The start date for the period',
		},
		{
			displayName: 'The End Date for the Period',
			name: 'end_date',
			type: 'string',
			default: '2025-03-31 23:59:59',
			required: true,
			description: 'The end date for the period',
		},
		{
			displayName: 'Filter All / Users / Guests',
			name: 'type',
			type: 'string',
			default: 'total',
		},
		{
			displayName: 'Optionally, Filter the Results by `Chart` or `topCountries`',
			name: 'filter',
			type: 'string',
			default: 'chart',
			description: 'Optionally, filter the results by `chart` or `topCountries`. See example responses.',
		},
		{
			displayName: 'Number of Results to Return',
			name: 'limit',
			type: 'number',
			description: 'Max number of results to return',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
		},
];

export const getProfileVisitorsOperation = {
	name: 'getProfileVisitors',
	displayName: 'Get Profile Visitors',
	method: 'GET' as const,
	parameters: getProfileVisitorsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

