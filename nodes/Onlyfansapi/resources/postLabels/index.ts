import type { INodeProperties } from 'n8n-workflow';
import { postLabelsCreateDescription } from './create';
import { postLabelsGetAllDescription } from './getAll';

const showOnlyForPostLabels = {
	resource: ['postLabels'],
};

export const postLabelsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPostLabels,
		},
		options: [
			{
				name: 'Create Label',
				value: 'create',
				action: 'Create label',
				description: 'Create a new post label',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter.accountId}}/posts/labels',
						body: {
							name: '={{$parameter.name}}',
						},
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List labels',
				description: 'List the labels that you can use to organize your posts',
				routing: {
					request: {
						method: 'GET',
						url: '={{$parameter.accountId}}/posts/labels',
						qs: {
							limit: '={{$parameter.options.limit}}',
							offset: '={{$parameter.options.offset}}',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...postLabelsCreateDescription,
	...postLabelsGetAllDescription,
];

