import type { INodeProperties } from 'n8n-workflow';

export { accountIdParameter } from '../sharedParameters';

export const trialLinkIdParameter: INodeProperties = {
	displayName: 'Trial Link ID',
	name: 'trialLinkId',
	type: 'string',
	required: true,
	default: '',
};
