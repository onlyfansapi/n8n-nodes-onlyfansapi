import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const setFansCustomNameResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Fan ID',
			name: 'fan_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The fan ID',
		},
		{
			displayName: 'New Custom Name for a Fan',
			name: 'custom_name',
			type: 'string',
			default: '🐳Whale ($100+)',
			required: true,
		},
];

export const setFansCustomNameOperation = {
	name: 'setFansCustomName',
	displayName: 'Set Fan\'s Custom Name',
	method: 'PUT' as const,
	parameters: setFansCustomNameResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

