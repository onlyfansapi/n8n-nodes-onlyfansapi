import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listFreeTrialLinksResource: INodeProperties[] = [
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
		description: 'Optional filters when listing free trial links',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Field',
				name: 'field',
				type: 'string',
				default: 'create_date',
				description: 'Sort the results by a field. Default `create_date`.',
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
				description: 'The offset used for pagination. Default `0`.',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: 'desc',
				description: 'Sort the results. Default `desc`.',
			},
			{
				displayName: 'Synchronous',
				name: 'synchronous',
				type: 'boolean',
				default: false,
				description: 'Whether to wait for revenue data to finish processing instead of background processing',
			},
		],
	},
];

export const listFreeTrialLinksOperation = {
	name: 'listFreeTrialLinks',
	displayName: 'List Free Trial Links',
	method: 'GET' as const,
	parameters: listFreeTrialLinksResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const createFreeTrialLinkResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Name of the Trail Link (Optional)',
			name: 'name',
			type: 'string',
			default: '7',
			description: 'The name of the trail link (optional). Cannot be longer than 64 characters.',
		},
		{
			displayName: 'The Trial Link Expiration **in Days (From Now)**',
			name: 'offerExpiration',
			type: 'number',
			default: 7,
			required: true,
			description: 'The trial link expiration **in days (from now)**. Must either be **0** (to never expire), or a number between **1** and **30**.',
		},
		{
			displayName: 'How Many People Can Use This Offer',
			name: 'offerLimit',
			type: 'number',
			default: 7,
			required: true,
			description: 'How many people can use this offer. Must either be **0** (for no limit), or a number between **1**-**10**, **50**, or **100**.',
		},
		{
			displayName: 'The Duration of the Free Trial **in Days**',
			name: 'duration',
			type: 'number',
			default: 7,
			required: true,
			description: 'The duration of the free trial **in days**. Must be **1**, **3**, **7**, **14**, **30** (1 month), **90** (3 months), **180** (6 months), or **360** (12 months).',
		},
];

export const createFreeTrialLinkOperation = {
	name: 'createFreeTrialLink',
	displayName: 'Create Free Trial Link',
	method: 'POST' as const,
	parameters: createFreeTrialLinkResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

