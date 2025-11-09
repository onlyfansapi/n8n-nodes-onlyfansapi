import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const checkUsernameAvailabilityResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Username to Check',
			name: 'username',
			type: 'string',
			default: 'MyNewUsername',
			required: true,
			description: 'The username to check',
		},
];

export const checkUsernameAvailabilityOperation = {
	name: 'checkUsernameAvailability',
	displayName: 'Check Username Availability',
	method: 'POST' as const,
	parameters: checkUsernameAvailabilityResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

