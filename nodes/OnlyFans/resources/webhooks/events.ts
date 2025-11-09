import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listAvailableEventsResource: INodeProperties[] = [
];

export const listAvailableEventsOperation = {
	name: 'listAvailableEvents',
	displayName: 'List Available Events',
	method: 'GET' as const,
	parameters: listAvailableEventsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

