import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listExpiredFansResource: INodeProperties[] = [
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
		description: 'Optional filters when listing expired fans',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'string',
				default: '20',
				description: 'Number of fans to return (1-50)',
			},
			{
				displayName: 'Minimum Subscription Duration (Days)',
				name: 'filter.duration',
				type: 'string',
				default: '30',
			},
			{
				displayName: 'Minimum Tips',
				name: 'filter.tips',
				type: 'string',
				default: '50',
			},
			{
				displayName: 'Minimum Total Spent',
				name: 'filter.total_spent',
				type: 'string',
				default: '100',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'string',
				default: '',
				description: 'Number of fans to skip',
			},
			{
				displayName: 'Online Status',
				name: 'filter.online',
				type: 'string',
				default: '1',
				description: 'Filter by online status (1 for online)',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: 'expired',
				description: 'Filter by fan type',
			},
		],
	},
];

export const listExpiredFansOperation = {
	name: 'listExpiredFans',
	displayName: 'List Expired Fans',
	method: 'GET' as const,
	parameters: listExpiredFansResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

