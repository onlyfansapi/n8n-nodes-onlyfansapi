import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const pollAuthenticationStatusResource: INodeProperties[] = [
		{
			displayName: 'The Attempt ID',
			name: 'attempt_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The attempt ID',
		},
];

export const pollAuthenticationStatusOperation = {
	name: 'pollAuthenticationStatus',
	displayName: 'Poll Authentication Status',
	method: 'GET' as const,
	parameters: pollAuthenticationStatusResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const submit2FAResource: INodeProperties[] = [
		{
			displayName: 'The Attempt ID',
			name: 'attempt_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The attempt ID',
		},
		{
			displayName: 'The 2FA Code You Received on Your Phone',
			name: 'code',
			type: 'string',
			default: '12345',
			required: true,
			description: 'The 2FA code you received on your phone',
		},
];

export const submit2FAOperation = {
	name: 'submit2FA',
	displayName: 'Submit 2FA',
	method: 'PUT' as const,
	parameters: submit2FAResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

