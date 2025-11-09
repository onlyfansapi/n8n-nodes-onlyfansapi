import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const enableUpdateAutomaticPostingResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Automatic Posting Interval (in Hours)',
			name: 'period',
			type: 'number',
			default: 6,
			required: true,
			description: 'The automatic posting interval (in hours)',
		},
];

export const enableUpdateAutomaticPostingOperation = {
	name: 'enableUpdateAutomaticPosting',
	displayName: 'Enable/Update Automatic Posting',
	method: 'PATCH' as const,
	parameters: enableUpdateAutomaticPostingResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

