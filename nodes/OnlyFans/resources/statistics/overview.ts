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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when retrieving statistics overview',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'string',
				default: '',
				description: 'The start date for the statistics. Keep empty to retrieve from the model\'s start date.',
			},
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'string',
				default: '',
				description: 'The end date for the statistics. Keep empty to retrieve until now.',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'The type of statistics to retrieve (e.g. fans)',
			},
		],
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

