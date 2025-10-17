import type { INodeProperties } from 'n8n-workflow';
import { queueCountDescription } from './count';
import { queueGetAllDescription } from './getAll';
import { queuePublishDescription } from './publish';

const showOnlyForQueue = {
	resource: ['queue'],
};

export const queueDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForQueue,
		},
		options: [
			{
				name: 'Count Items',
				value: 'count',
				action: 'Count queue items',
				description: 'Count posts and messages in the queue',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/queue/counts',
						qs: {
							publishDateStart: '{{$parameter.publishDateStart}}',
							publishDateEnd: '{{$parameter.publishDateEnd}}',
							timezone: '{{$parameter.timezone}}',
						},
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List queue items',
				description: 'List posts and messages in the queue',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/queue',
						qs: {
							publishDateStart: '{{$parameter.publishDateStart}}',
							publishDateEnd: '{{$parameter.publishDateEnd}}',
							timezone: '{{$parameter.timezone}}',
							limit: '{{$parameter.options.limit}}',
						},
					},
				},
			},
			{
				name: 'Publish Item',
				value: 'publish',
				action: 'Publish queue item',
				description: 'Publish a queue item or "saved for later" item immediately',
				routing: {
					request: {
						method: 'PUT',
						url: '{{.accountId}}/queue/{{$parameter.queueId}}/publish',
					},
				},
			},
		],
		default: 'getAll',
	},
	...queueCountDescription,
	...queueGetAllDescription,
	...queuePublishDescription,
];

