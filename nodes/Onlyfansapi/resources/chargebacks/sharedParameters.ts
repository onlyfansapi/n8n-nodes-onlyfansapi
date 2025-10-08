import type { INodeProperties } from 'n8n-workflow';

export { accountIdParameter } from '../sharedParameters';

export const startDateParameter: INodeProperties = {
	displayName: 'Start Date',
	name: 'start_date',
	type: 'dateTime',
	default: '',
	description: 'The start date for the chargebacks. When not provided, retrieves all records.',
};

export const endDateParameter: INodeProperties = {
	displayName: 'End Date',
	name: 'end_date',
	type: 'dateTime',
	default: '',
	description: 'The end date for the chargebacks. When not provided, retrieves all records.',
};