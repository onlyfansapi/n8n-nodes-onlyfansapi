import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const enableUpdateAutomaticMessagingResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Automatic Messaging Interval (in Hours)',
			name: 'period',
			type: 'number',
			default: 48,
			required: true,
			description: 'The automatic messaging interval (in hours)',
		},
];

export const enableUpdateAutomaticMessagingOperation = {
	name: 'enableUpdateAutomaticMessaging',
	displayName: 'Enable/Update Automatic Messaging',
	method: 'PATCH' as const,
	parameters: enableUpdateAutomaticMessagingResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

