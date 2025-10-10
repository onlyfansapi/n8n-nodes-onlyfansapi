import type { INodeProperties } from 'n8n-workflow';
import { fansListActiveFansDescription } from './listActiveFans';
import { fansListAllFansDescription } from './listAllFans';
import { fansListExpiredFansDescription } from './listExpiredFans';
import { fansListLatestFansDescription } from './listLatestFans';

const showOnlyForFans = {
	resource: ['fans'],
};

export const fansDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFans,
		},
		options: [
			{
				name: 'List Active Fans',
				value: 'listActiveFans',
				action: 'List active fans',
				description: 'Get a paginated list of fans for an Account. Newest fans are first.',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/fans/active',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							type: '={{$parameter.options.type}}',
							'filter.online': '={{$parameter.filters.online ? "1" : ""}}',
							'filter.total_spent': '={{$parameter.filters.total_spent}}',
							'filter.tips': '={{$parameter.filters.tips}}',
							'filter.duration': '={{$parameter.filters.duration}}',
						},
					},
				},
			},
			{
				name: 'List All Fans',
				value: 'listAllFans',
				action: 'List all fans',
				description: 'Get a paginated list of fans for an Account. Newest fans are first.',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/fans/all',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							type: '={{$parameter.options.type}}',
							'filter.online': '={{$parameter.filters.online ? "1" : ""}}',
							'filter.total_spent': '={{$parameter.filters.total_spent}}',
							'filter.tips': '={{$parameter.filters.tips}}',
							'filter.duration': '={{$parameter.filters.duration}}',
						},
					},
				},
			},
			{
				name: 'List Expired Fans',
				value: 'listExpiredFans',
				action: 'List expired fans',
				description: 'Get a paginated list of expired fans for an Account. Newest fans are first.',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/fans/expired',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							type: '={{$parameter.options.type}}',
							'filter.online': '={{$parameter.filters.online ? "1" : ""}}',
							'filter.total_spent': '={{$parameter.filters.total_spent}}',
							'filter.tips': '={{$parameter.filters.tips}}',
							'filter.duration': '={{$parameter.filters.duration}}',
						},
					},
				},
			},
			{
				name: 'List Latest Fans',
				value: 'listLatestFans',
				action: 'List latest fans',
				description: 'Get a paginated list of latest fans for an Account. Newest fans are first.',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/fans/latest',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
							type: '={{$parameter.options.type}}',
							'filter.online': '={{$parameter.filters.online ? "1" : ""}}',
							'filter.total_spent': '={{$parameter.filters.total_spent}}',
							'filter.tips': '={{$parameter.filters.tips}}',
							'filter.duration': '={{$parameter.filters.duration}}',
						},
					},
				},
			},
		],
		default: 'listAllFans',
	},
	...fansListActiveFansDescription,
	...fansListAllFansDescription,
	...fansListExpiredFansDescription,
	...fansListLatestFansDescription,
];
