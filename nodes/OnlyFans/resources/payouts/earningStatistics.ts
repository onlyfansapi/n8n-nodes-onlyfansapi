import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getEarningStatisticsResource: INodeProperties[] = [
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
		description: 'Optional parameters when retrieving earning statistics',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'string',
				default: '',
				description: 'The start date for earning statistics. Keep empty to get all earnings.',
			},
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'string',
				default: '',
				description: 'The end date for earning statistics. Keep empty to get all earnings.',
			},
		],
	},
];

export const getEarningStatisticsOperation = {
	name: 'getEarningStatistics',
	displayName: 'Get Earning Statistics',
	method: 'GET' as const,
	parameters: getEarningStatisticsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

