export { accountIdParameter } from '../sharedParameters';

import type { INodeProperties } from 'n8n-workflow';

export const queueIdParameter: INodeProperties = {
	displayName: 'Queue ID',
	name: 'queueId',
	type: 'string',
	required: true,
	default: '',
	description: 'The ID of the message queue item',
};

