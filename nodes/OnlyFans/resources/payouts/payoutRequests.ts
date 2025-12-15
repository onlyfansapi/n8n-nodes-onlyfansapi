import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listPayoutRequestsResource: INodeProperties[] = [
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
		description: 'Optional parameters when listing payout requests',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'string',
				default: '10',
				description: 'Number of payout requests to return',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'string',
				default: '',
				description: 'Number of payout requests to skip for pagination',
			},
		],
	},
];

export const listPayoutRequestsOperation = {
	name: 'listPayoutRequests',
	displayName: 'List Payout Requests',
	method: 'GET' as const,
	parameters: listPayoutRequestsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

