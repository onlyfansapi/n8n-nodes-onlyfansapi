export { accountIdParameter } from '../sharedParameters';

import type { INodeProperties } from 'n8n-workflow';

export const trackingLinkIdParameter: INodeProperties = {
	displayName: 'Tracking Link ID',
	name: 'trackingLinkId',
	type: 'string',
	required: true,
	default: '',
	description: 'The ID of the tracking link',
};

