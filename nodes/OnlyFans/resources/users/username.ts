import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getUserDetailsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'The username',
		},
];

export const getUserDetailsOperation = {
	name: 'getUserDetails',
	displayName: 'Get User Details',
	method: 'GET' as const,
	parameters: getUserDetailsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

