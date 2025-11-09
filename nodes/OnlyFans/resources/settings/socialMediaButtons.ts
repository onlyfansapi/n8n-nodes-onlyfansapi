import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listSocialMediaButtonsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
];

export const listSocialMediaButtonsOperation = {
	name: 'listSocialMediaButtons',
	displayName: 'List Social Media Buttons',
	method: 'GET' as const,
	parameters: listSocialMediaButtonsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const addSocialMediaButtonResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Button Label',
			name: 'label',
			type: 'string',
			default: 'Instagram',
			required: true,
			description: 'The button label',
		},
		{
			displayName: 'The Button Type',
			name: 'type',
			type: 'string',
			default: 'Instagram',
			required: true,
			description: 'The button type',
		},
		{
			displayName: 'The Button Value, Either a Username or Link',
			name: 'value',
			type: 'string',
			default: 'example_user',
			required: true,
			description: 'The button value, either a username or link',
		},
];

export const addSocialMediaButtonOperation = {
	name: 'addSocialMediaButton',
	displayName: 'Add Social Media Button',
	method: 'POST' as const,
	parameters: addSocialMediaButtonResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

