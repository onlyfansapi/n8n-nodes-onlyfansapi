import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from '../sharedParameters';

export const connectOnlyfansAccountReAuthenticateAccountDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['connectOnlyfansAccount'],
				operation: ['reAuthenticateAccount'],
			},
		},
	},
];

