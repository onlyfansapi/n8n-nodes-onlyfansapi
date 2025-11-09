import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const archivePostResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Post ID',
			name: 'post_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The post ID',
		},
		{
			displayName: 'Set to `True` to Move This Post to the Private Archive',
			name: 'private_archive',
			type: 'boolean',
			default: true,
		},
];

export const archivePostOperation = {
	name: 'archivePost',
	displayName: 'Archive Post',
	method: 'POST' as const,
	parameters: archivePostResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

