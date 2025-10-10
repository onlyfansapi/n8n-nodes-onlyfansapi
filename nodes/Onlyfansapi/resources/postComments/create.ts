import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter } from './sharedParameters';

export const postCommentsCreateDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['create'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		description: 'The text of the comment',
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Answer To',
				name: 'answerTo',
				type: 'number',
				default: 0,
				description: 'The ID of the comment to which this comment is a reply',
			},
			{
				displayName: 'Giphy ID',
				name: 'giphyId',
				type: 'string',
				default: '',
				description: 'The ID of the Giphy to include in the comment',
			},
		],
	},
];

