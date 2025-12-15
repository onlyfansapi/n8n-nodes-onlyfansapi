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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional filters when listing latest fans',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'string',
				default: '',
				description: 'End date for filtering. Required when start_date is present.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Must be at least 0',
			},
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'string',
				default: '',
				description: 'Start date for filtering. Required when end_date is present.',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: 'total',
				description: 'Filter by type: total, renew, or new',
			},
		],
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

