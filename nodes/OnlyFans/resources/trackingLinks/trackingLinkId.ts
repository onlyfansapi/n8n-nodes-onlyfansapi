import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const deleteTrackingLinkResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Tracking Link ID',
			name: 'tracking_link_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The tracking link ID',
		},
];

export const deleteTrackingLinkOperation = {
	name: 'deleteTrackingLink',
	displayName: 'Delete Tracking Link',
	method: 'DELETE' as const,
	parameters: deleteTrackingLinkResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

