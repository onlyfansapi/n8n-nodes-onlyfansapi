import type { INodeProperties } from 'n8n-workflow';
import { massMessagingDeleteDescription } from './delete';
import { massMessagingGetDescription } from './get';
import { massMessagingListMassMessageQueueDescription } from './listMassMessageQueue';
import { massMessagingListMassMessageStatisticsDescription } from './listMassMessageStatistics';
import { massMessagingSendDescription } from './send';
import { massMessagingUpdateDescription } from './update';

const showOnlyForMassMessaging = {
	resource: ['massMessaging'],
};

export const massMessagingDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMassMessaging,
		},
		options: [
			{
				name: 'Get Mass Message',
				value: 'get',
				action: 'Get mass message',
				description: 'Get the content of a mass message',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/mass-messaging/{{$parameter.messageId}}',
					},
				},
			},
			{
				name: 'List Mass Message Queue',
				value: 'listMassMessageQueue',
				action: 'List mass message queue',
				description: 'List the pending or recently sent mass messages in the message queue',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/mass-messaging',
					},
				},
			},
			{
				name: 'List Mass Message Statistics',
				value: 'listMassMessageStatistics',
				action: 'List mass message statistics',
				description: 'List mass messaging statistics, showing the send count and view count',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/mass-messaging/statistics',
						qs: {
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
							query: '{{.options.query}}',
							type: '{{.options.type}}',
						},
					},
				},
			},
			{
				name: 'Send Mass Message',
				value: 'send',
				action: 'Send mass message',
				description: 'Send a mass message to lists and/or users. You may use both the userLists and userIds parameters to send the same message to both lists and individual users.',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/mass-messaging',
						body: {
							text: '{{.text}}',
							userLists: '{{.additionalFields.userLists}}',
							userIds: '{{.additionalFields.userIds}}',
							lockedText: '{{.additionalFields.lockedText}}',
							price: '{{.additionalFields.price}}',
							mediaFiles: '{{.additionalFields.mediaFiles}}',
							previews: '{{.additionalFields.previews}}',
							scheduledDate: '{{.additionalFields.scheduledDate}}',
							saveForLater: '{{.additionalFields.saveForLater}}',
						},
					},
				},
			},
			{
				name: 'Unsend/Delete Mass Message',
				value: 'delete',
				action: 'Unsend delete mass message',
				description: 'Unsend a recently sent mass message, or delete a scheduled/saved message. When unsending, purchased content will continue to be able to viewable.',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/mass-messaging/{{$parameter.messageId}}',
					},
				},
			},
			{
				name: 'Update Mass Message',
				value: 'update',
				action: 'Update mass message',
				description: 'Update a mass message',
				routing: {
					request: {
						method: 'PUT',
						url: '{{.accountId}}/mass-messaging/{{$parameter.messageId}}',
						body: {
							text: '{{.text}}',
							userLists: '{{.additionalFields.userLists}}',
							userIds: '{{.additionalFields.userIds}}',
							lockedText: '{{.additionalFields.lockedText}}',
							price: '{{.additionalFields.price}}',
							mediaFiles: '{{.additionalFields.mediaFiles}}',
							previews: '{{.additionalFields.previews}}',
							scheduledDate: '{{.additionalFields.scheduledDate}}',
						},
					},
				},
			},
		],
		default: 'listMassMessageQueue',
	},
	...massMessagingDeleteDescription,
	...massMessagingGetDescription,
	...massMessagingListMassMessageQueueDescription,
	...massMessagingListMassMessageStatisticsDescription,
	...massMessagingSendDescription,
	...massMessagingUpdateDescription,
];
