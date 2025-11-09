import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getApiAccountWorkflowsAccountPerformanceStartingRevenuesResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Must Be a Valid Date',
			name: 'launch_date',
			type: 'string',
			default: '2025-10-29T15:33:18',
			required: true,
		},
];

export const getApiAccountWorkflowsAccountPerformanceStartingRevenuesOperation = {
	name: 'getApiAccountWorkflowsAccountPerformanceStartingRevenues',
	displayName: 'getApiAccountWorkflowsAccountPerformanceStartingRevenues',
	method: 'GET' as const,
	parameters: getApiAccountWorkflowsAccountPerformanceStartingRevenuesResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

