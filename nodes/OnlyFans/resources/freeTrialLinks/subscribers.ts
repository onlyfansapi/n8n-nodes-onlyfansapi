import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listFreeTrialLinkSubscribersResource: INodeProperties[] = [
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
			displayName: 'The Number of Subscribers to Return per Page',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			required: true,
			description: 'Max number of results to return',
		},
		{
			displayName: 'The Offset Used for Pagination',
			name: 'offset',
			type: 'number',
			default: 0,
			required: true,
			description: 'The offset used for pagination. Default `0`.',
		},
];

export const listFreeTrialLinkSubscribersOperation = {
	name: 'listFreeTrialLinkSubscribers',
	displayName: 'List Free Trial Link Subscribers',
	method: 'GET' as const,
	parameters: listFreeTrialLinkSubscribersResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

