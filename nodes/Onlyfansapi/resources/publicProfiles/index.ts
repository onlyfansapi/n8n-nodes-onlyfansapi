import type { INodeProperties } from 'n8n-workflow';
import { publicProfilesGetDescription } from './get';
import { publicProfilesSearchDescription } from './search';

const showOnlyForPublicProfiles = {
	resource: ['publicProfiles'],
};

export const publicProfilesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPublicProfiles,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get profile details',
				description: 'Get profile details by username',
				routing: {
					request: {
						method: 'GET',
						url: '=/profiles/{{$parameter.username}}',
					},
				},
			},
			{
				name: 'Search',
				value: 'search',
				action: 'Search profiles',
				description: 'Full-text search for profiles with filters',
				routing: {
					request: {
						method: 'GET',
						url: '=/search',
						qs: {
							query: '={{$parameter.query}}',
							limit: '={{$parameter.options.limit}}',
							min_subscribe_price: '={{$parameter.options.min_subscribe_price}}',
							max_subscribe_price: '={{$parameter.options.max_subscribe_price}}',
							location: '={{$parameter.options.location}}',
							website: '={{$parameter.options.website}}',
							instagram: '={{$parameter.options.instagram}}',
							tiktok: '={{$parameter.options.tiktok}}',
							facebook: '={{$parameter.options.facebook}}',
						},
					},
				},
			},
		],
		default: 'search',
	},
	...publicProfilesGetDescription,
	...publicProfilesSearchDescription,
];

