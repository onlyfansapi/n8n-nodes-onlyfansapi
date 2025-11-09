import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const reorderSocialMediaButtonsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The New Order of the Buttons',
			name: 'button_ids',
			type: 'string',
			default: '123,456',
			required: true,
			description: 'The new order of the buttons',
		},
];

export const reorderSocialMediaButtonsOperation = {
	name: 'reorderSocialMediaButtons',
	displayName: 'Reorder Social Media Buttons',
	method: 'POST' as const,
	parameters: reorderSocialMediaButtonsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

