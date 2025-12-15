import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listFreeTrialLinkSpendersResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'The Trial Link ID',
		name: 'trial_link_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The trial link ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional filters when listing free trial link spenders',
		placeholder: 'Add Field',
		options: [
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
				description: 'The offset used for pagination. Default `0`.',
			},
			{
				displayName: 'Minimum Spend',
				name: 'minSpend',
				type: 'number',
				default: 1,
				description: 'Minimal spend of a fan. Default `1`. Must be at least 1.',
			},
		],
	},
];

export const listFreeTrialLinkSpendersOperation = {
	name: 'listFreeTrialLinkSpenders',
	displayName: 'List Free Trial Link Spenders',
	method: 'GET' as const,
	parameters: listFreeTrialLinkSpendersResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

