import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const updateSocialMediaButtonResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Button ID',
			name: 'button_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The button ID',
		},
		{
			displayName: 'The New Label for the Button',
			name: 'label',
			type: 'string',
			default: 'Instagram',
			required: true,
			description: 'The new label for the button',
		},
];

export const updateSocialMediaButtonOperation = {
	name: 'updateSocialMediaButton',
	displayName: 'Update Social Media Button',
	method: 'PUT' as const,
	parameters: updateSocialMediaButtonResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const deleteSocialMediaButtonResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Button ID',
			name: 'button_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The button ID',
		},
];

export const deleteSocialMediaButtonOperation = {
	name: 'deleteSocialMediaButton',
	displayName: 'Delete Social Media Button',
	method: 'DELETE' as const,
	parameters: deleteSocialMediaButtonResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

