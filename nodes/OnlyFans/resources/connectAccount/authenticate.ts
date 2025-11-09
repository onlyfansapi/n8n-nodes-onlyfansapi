import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const startAuthenticationResource: INodeProperties[] = [
		{
			displayName: 'The Email Address of the OnlyFans Account',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: 'afton07@example.com',
			required: true,
			description: 'The email address of the OnlyFans account',
		},
		{
			displayName: 'The Password of the OnlyFans Account',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: 'W"BQ)T;S',
			required: true,
			description: 'The password of the OnlyFans account',
		},
		{
			displayName: 'The Country of the Proxy Server You Want to Use',
			name: 'proxyCountry',
			type: 'string',
			default: 'it',
			required: true,
			description: 'The country of the proxy server you want to use. Eg. "us" for United States',
		},
];

export const startAuthenticationOperation = {
	name: 'startAuthentication',
	displayName: 'Start Authentication',
	method: 'POST' as const,
	parameters: startAuthenticationResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

