import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const requestManualWithdrawalResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Amount to Withdraw',
			name: 'amount',
			type: 'number',
			default: 50,
			required: true,
			description: 'The amount to withdraw. Amount may not be higher than the current balance.',
		},
];

export const requestManualWithdrawalOperation = {
	name: 'requestManualWithdrawal',
	displayName: 'Request Manual Withdrawal',
	method: 'POST' as const,
	parameters: requestManualWithdrawalResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

