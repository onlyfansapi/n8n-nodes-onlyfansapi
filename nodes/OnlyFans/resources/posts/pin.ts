import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const pinUnpinPostResource: INodeProperties[] = [
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
];

export const pinUnpinPostOperation = {
	name: 'pinUnpinPost',
	displayName: 'Pin/Unpin Post',
	method: 'POST' as const,
	parameters: pinUnpinPostResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

