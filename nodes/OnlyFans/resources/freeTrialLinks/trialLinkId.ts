import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const deleteFreeTrialLinkResource: INodeProperties[] = [
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
];

export const deleteFreeTrialLinkOperation = {
	name: 'deleteFreeTrialLink',
	displayName: 'Delete Free Trial Link',
	method: 'DELETE' as const,
	parameters: deleteFreeTrialLinkResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

