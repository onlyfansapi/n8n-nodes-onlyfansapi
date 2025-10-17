import type { INodeProperties } from 'n8n-workflow';
import { freeTrialLinksCreateDescription } from './create';
import { freeTrialLinksDeleteDescription } from './delete';
import { freeTrialLinksGetAllDescription } from './getAll';
import { freeTrialLinksListFreeTrialLinkSpendersDescription } from './listFreeTrialLinkSpenders';
import { freeTrialLinksListFreeTrialLinkSubscribersDescription } from './listFreeTrialLinkSubscribers';

const showOnlyForFreeTrialLinks = {
	resource: ['freeTrialLinks'],
};

export const freeTrialLinksDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFreeTrialLinks,
		},
		options: [
			{
				name: 'Create Free Trial Link',
				value: 'create',
				action: 'Create free trial link',
				description: 'Create a free trial link for the account',
				routing: {
					request: {
						method: 'POST',
						url: '{{.accountId}}/trial-links',
						body: {
							subscribeDays: '{{.subscribeDays}}',
							trialLinkName: '{{.additionalFields.trialLinkName}}',
							subscribeCounts: '{{.additionalFields.subscribeCounts}}',
							expiredAt: '{{.additionalFields.expiredAt}}',
						},
					},
				},
			},
			{
				name: 'Delete Free Trial Link',
				value: 'delete',
				action: 'Delete free trial link',
				description: 'Delete a free trial link by its ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '{{.accountId}}/trial-links/{{$parameter.trialLinkId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List free trial links',
				description: 'List many free trial links for the account, including the details and statistics',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/trial-links',
						qs: {
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
							sort: '{{.options.sort}}',
							field: '{{.options.field}}',
							synchronous: '{{.options.synchronous}}',
						},
					},
				},
			},
			{
				name: 'List Free Trial Link Spenders',
				value: 'listFreeTrialLinkSpenders',
				action: 'List free trial link spenders',
				description: 'Only available if we already scraped subscribers and calculated revenue per fan',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/trial-links/{{$parameter.trialLinkId}}/spenders',
						qs: {
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
							minSpend: '{{.options.minSpend}}',
						},
					},
				},
			},
			{
				name: 'List Free Trial Link Subscribers',
				value: 'listFreeTrialLinkSubscribers',
				action: 'List free trial link subscribers',
				description: 'Get list of subscribers who joined through a Free Trial Link',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/trial-links/{{$parameter.trialLinkId}}/subscribers',
						qs: {
							limit: '{{.options.limit}}',
							offset: '{{.options.offset}}',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...freeTrialLinksCreateDescription,
	...freeTrialLinksDeleteDescription,
	...freeTrialLinksGetAllDescription,
	...freeTrialLinksListFreeTrialLinkSpendersDescription,
	...freeTrialLinksListFreeTrialLinkSubscribersDescription,
];
