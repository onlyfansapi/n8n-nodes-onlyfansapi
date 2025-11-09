import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const publishQueueItemResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Queue ID',
			name: 'queue_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The queue ID',
		},
];

export const publishQueueItemOperation = {
	name: 'publishQueueItem',
	displayName: 'Publish Queue Item',
	method: 'PUT' as const,
	parameters: publishQueueItemResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

