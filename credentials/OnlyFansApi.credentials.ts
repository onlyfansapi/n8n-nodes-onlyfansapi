import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OnlyFansApi implements ICredentialType {
	name = 'onlyFansApi';

	displayName = 'OnlyFans API';

	icon: Icon = { light: 'file:../icons/onlyfansapi.svg', dark: 'file:../icons/onlyfansapi.svg' };

	documentationUrl = 'https://docs.onlyfansapi.com/integrations/n8n';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'bearerToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.bearerToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.onlyfansapi.com/api',
			url: '/whoami',
			method: 'GET',
		},
	};
}
