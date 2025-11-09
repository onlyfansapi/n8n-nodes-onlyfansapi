import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const updatePayoutFrequencyResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The New Payout Frequency',
			name: 'frequency',
			type: 'string',
			default: 'manual',
			required: true,
			description: 'The new payout frequency',
		},
];

export const updatePayoutFrequencyOperation = {
	name: 'updatePayoutFrequency',
	displayName: 'Update Payout Frequency',
	method: 'PATCH' as const,
	parameters: updatePayoutFrequencyResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

