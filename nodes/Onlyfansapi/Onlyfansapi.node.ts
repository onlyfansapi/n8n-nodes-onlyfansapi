import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { accountDescription } from './resources/account';
import { apiKeysDescription } from './resources/apiKeys';
import { bankingDescription } from './resources/banking';
import { chargebacksDescription } from './resources/chargebacks';
import { chatMessagesDescription } from './resources/chatMessages';
import { chatsDescription } from './resources/chats';
import { clientSessionsDescription } from './resources/clientSessions';
import { connectOnlyfansAccountDescription } from './resources/connectOnlyfansAccount';
import { fansDescription } from './resources/fans';
import { followingDescription } from './resources/following';
import { freeTrialLinksDescription } from './resources/freeTrialLinks';
import { massMessagingDescription } from './resources/massMessaging';
import { mediaDescription } from './resources/media';
import { mediaVaultDescription } from './resources/mediaVault';
import { mediaVaultListsDescription } from './resources/mediaVaultLists';
import { notificationsDescription } from './resources/notifications';
import { payoutsDescription } from './resources/payouts';
import { postCommentsDescription } from './resources/postComments';
import { postLabelsDescription } from './resources/postLabels';
import { postsDescription } from './resources/posts';
import { savedForLaterMessagesDescription } from './resources/savedForLaterMessages';
import { userListsDescription } from './resources/userLists';

export class Onlyfansapi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OnlyFans API',
		name: 'onlyfansapi',
		icon: 'file:onlyfansapi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with OnlyFans API',
		defaults: {
			name: 'OnlyFans API',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'onlyfansapiApi', required: true }],
		requestDefaults: {
			baseURL: 'https://app.onlyfansapi.com/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': 'n8n-onlyfans-api/0.1.0',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
			options: [
				{
					name: 'Account',
					value: 'account',
				},
				{
					name: 'API Key',
					value: 'apiKeys',
				},
				{
					name: 'Banking',
					value: 'banking',
				},
				{
					name: 'Chargeback',
					value: 'chargebacks',
				},
				{
					name: 'Chat',
					value: 'chats',
				},
				{
					name: 'Chat Message',
					value: 'chatMessages',
				},
				{
					name: 'Client Session',
					value: 'clientSessions',
				},
				{
					name: 'Connect OnlyFans Account',
					value: 'connectOnlyfansAccount',
				},
				{
					name: 'Fan',
					value: 'fans',
				},
				{
					name: 'Following',
					value: 'following',
				},
				{
					name: 'Free Trial Link',
					value: 'freeTrialLinks',
				},
				{
					name: 'Mass Messaging',
					value: 'massMessaging',
				},
				{
					name: 'Media',
					value: 'media',
				},
				{
					name: 'Media Vault',
					value: 'mediaVault',
				},
				{
					name: 'Media Vault List',
					value: 'mediaVaultLists',
				},
				{
					name: 'Notification',
					value: 'notifications',
				},
				{
					name: 'Payout',
					value: 'payouts',
				},
				{
					name: 'Post',
					value: 'posts',
				},
				{
					name: 'Post Comment',
					value: 'postComments',
				},
				{
					name: 'Post Label',
					value: 'postLabels',
				},
				{
					name: 'Saved For Later Message',
					value: 'savedForLaterMessages',
				},
				{
					name: 'User List',
					value: 'userLists',
				},
			],
			default: 'account',
		},
		...accountDescription,
		...apiKeysDescription,
		...bankingDescription,
		...chargebacksDescription,
		...chatsDescription,
		...chatMessagesDescription,
		...clientSessionsDescription,
		...connectOnlyfansAccountDescription,
		...fansDescription,
		...followingDescription,
		...freeTrialLinksDescription,
		...massMessagingDescription,
		...mediaDescription,
		...mediaVaultDescription,
		...mediaVaultListsDescription,
		...notificationsDescription,
		...payoutsDescription,
		...postsDescription,
		...postCommentsDescription,
		...postLabelsDescription,
		...savedForLaterMessagesDescription,
		...userListsDescription,
	],
	};
}
