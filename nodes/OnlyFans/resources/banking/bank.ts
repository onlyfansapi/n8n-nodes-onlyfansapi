import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getBankPayoutDetailsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
];

export const getBankPayoutDetailsOperation = {
	name: 'getBankPayoutDetails',
	displayName: 'Get Bank Payout Details',
	method: 'GET' as const,
	parameters: getBankPayoutDetailsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

