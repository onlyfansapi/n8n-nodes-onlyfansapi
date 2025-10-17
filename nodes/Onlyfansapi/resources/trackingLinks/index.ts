import type { INodeProperties } from 'n8n-workflow';
import { trackingLinksCreateDescription } from './create';
import { trackingLinksDeleteDescription } from './delete';
import { trackingLinksGetAllDescription } from './getAll';
import { trackingLinksGetSpendersDescription } from './getSpenders';
import { trackingLinksGetSubscribersDescription } from './getSubscribers';

const showOnlyForTrackingLinks = {
	resource: ['trackingLinks'],
};

export const trackingLinksDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTrackingLinks,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create tracking link',
				description: 'Create a new tracking link',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/tracking-links',
						body: {
							campaignName: '{{.campaignName}}',
							endDate: '{{.additionalFields.endDate}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete tracking link',
				description: 'Delete a tracking link',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/tracking-links/{{$parameter.trackingLinkId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List tracking links',
				description: 'List many tracking links for the account with revenue data',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/tracking-links',
						qs: {
							startDate: '{{$parameter.options.startDate}}',
							endDate: '{{$parameter.options.endDate}}',
							with_deleted: '{{$parameter.options.with_deleted}}',
							sortby: '{{$parameter.options.sortby}}',
							sort: '{{$parameter.options.sort}}',
							limit: '{{$parameter.options.limit}}',
							offset: '{{$parameter.options.offset}}',
							synchronous: '{{$parameter.options.synchronous}}',
						},
					},
				},
			},
			{
				name: 'Get Spenders',
				value: 'getSpenders',
				action: 'Get tracking link spenders',
				description: 'Get list of spenders who made purchases through a tracking link',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/tracking-links/{{$parameter.trackingLinkId}}/spenders',
						qs: {
							limit: '{{$parameter.options.limit}}',
							offset: '{{$parameter.options.offset}}',
						},
					},
				},
			},
			{
				name: 'Get Subscribers',
				value: 'getSubscribers',
				action: 'Get tracking link subscribers',
				description: 'Get list of subscribers who joined through a tracking link',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/tracking-links/{{$parameter.trackingLinkId}}/subscribers',
						qs: {
							limit: '{{$parameter.options.limit}}',
							offset: '{{$parameter.options.offset}}',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...trackingLinksCreateDescription,
	...trackingLinksDeleteDescription,
	...trackingLinksGetAllDescription,
	...trackingLinksGetSpendersDescription,
	...trackingLinksGetSubscribersDescription,
];

