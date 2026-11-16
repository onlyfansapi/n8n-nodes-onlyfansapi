import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OnlyFansApi implements ICredentialType {
	name = 'onlyFansApi';

	displayName = 'Fans API';

	icon: Icon = { light: 'file:../icons/fansapi.svg', dark: 'file:../icons/fansapi.svg' };

	documentationUrl = 'https://docs.fansapi.com/integrations/n8n';

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
			baseURL: 'https://app.fansapi.com/api',
			url: '/whoami',
			method: 'GET',
		},
	};
}
