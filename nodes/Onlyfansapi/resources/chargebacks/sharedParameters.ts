import type { INodeProperties } from 'n8n-workflow';

export const accountIdParameter: INodeProperties = {
	displayName: 'Account ID',
	name: 'accountId',
	type: 'string',
	required: true,
	default: '',
};

export const startDateParameter: INodeProperties = {
	displayName: 'Start Date',
	name: 'start_date',
	type: 'dateTime',
	required: true,
	default: '',
};

export const endDateParameter: INodeProperties = {
	displayName: 'End Date',
	name: 'end_date',
	type: 'dateTime',
	required: true,
	default: '',
};
