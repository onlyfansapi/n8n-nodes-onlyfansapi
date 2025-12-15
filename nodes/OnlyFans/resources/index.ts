import type { INodeProperties, IDataObject } from 'n8n-workflow';

export interface Operation {
	name: string;
	displayName: string;
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	parameters: INodeProperties[];
	processResponse: (responseData: unknown) => IDataObject[];
	endpoint?: string;
}

export interface EndpointResource {
	name: string;
	displayName: string;
	description: string;
	endpoint: string;
	operations: Operation[];
}

import { accountResources } from './account';
import { apiKeysResources } from './apiKeys';
import { bankingResources } from './banking';
import { chargebacksResources } from './chargebacks';
import { chatMessagesResources } from './chatMessages';
import { chatsResources } from './chats';
import { clientSessionsResources } from './clientSessions';
import { connectAccountResources } from './connectAccount';
import { endpointsResources } from './endpoints';
import { fansResources } from './fans';
import { followingResources } from './following';
import { freeTrialLinksResources } from './freeTrialLinks';
import { massMessagingResources } from './massMessaging';
import { mediaResources } from './media';
import { mediaVaultResources } from './mediaVault';
import { mediaVaultListsResources } from './mediaVaultLists';
import { notificationsResources } from './notifications';
import { payoutsResources } from './payouts';
import { postCommentsResources } from './postComments';
import { postLabelsResources } from './postLabels';
import { postsResources } from './posts';
import { publicProfilesResources } from './publicProfiles';
import { queueResources } from './queue';
import { savedForLaterMessagesResources } from './savedForLaterMessages';
import { savedForLaterPostsResources } from './savedForLaterPosts';
import { settingsResources } from './settings';
import { statisticsResources } from './statistics';
import { trackingLinksResources } from './trackingLinks';
import { transactionsResources } from './transactions';
import { userListCollectionsResources } from './userListCollections';
import { usersResources } from './users';
import { webhooksResources } from './webhooks';

const baseResources: EndpointResource[] = [
	...accountResources,
	...apiKeysResources,
	...bankingResources,
	...chargebacksResources,
	...chatMessagesResources,
	...chatsResources,
	...clientSessionsResources,
	...connectAccountResources,
	...endpointsResources,
	...fansResources,
	...followingResources,
	...freeTrialLinksResources,
	...massMessagingResources,
	...mediaResources,
	...mediaVaultResources,
	...mediaVaultListsResources,
	...notificationsResources,
	...payoutsResources,
	...postCommentsResources,
	...postLabelsResources,
	...postsResources,
	...publicProfilesResources,
	...queueResources,
	...savedForLaterMessagesResources,
	...savedForLaterPostsResources,
	...settingsResources,
	...statisticsResources,
	...trackingLinksResources,
	...transactionsResources,
	...userListCollectionsResources,
	...usersResources,
	...webhooksResources
];

type OperationRef = string | { name: string; displayName?: string };

const operationLookup = new Map<string, { operation: Operation; endpoint: string }>();

for (const resource of baseResources) {
	for (const operation of resource.operations) {
		operationLookup.set(operation.name, { operation, endpoint: resource.endpoint });
	}
}

const normalizeParameter = (param: INodeProperties): INodeProperties => {
	const cloned: INodeProperties = { ...param };

	if (cloned.type === 'string') {
		if (typeof cloned.default === 'string' && cloned.default !== '') {
			cloned.placeholder ??= cloned.default;
		}
		cloned.default = '';
	} else if (cloned.type === 'number') {
		if (typeof cloned.default === 'number') {
			cloned.placeholder ??= cloned.default.toString();
		}
		cloned.default = undefined as unknown as number;
	} else if (cloned.type === 'boolean') {
		if (typeof cloned.default === 'boolean') {
			cloned.default = false;
		}
	}

	return cloned;
};

const normalizeParameters = (parameters: INodeProperties[]): INodeProperties[] => {
	return parameters.map(parameter => normalizeParameter(parameter));
};

const createOperation = (ref: OperationRef): Operation => {
	const { name, displayName } = typeof ref === 'string' ? { name: ref, displayName: undefined } : ref;
	const entry = operationLookup.get(name);

	if (!entry) {
		throw new Error(`Unsupported operation "${name}".`);
	}

	return {
		...entry.operation,
		parameters: normalizeParameters(entry.operation.parameters),
		displayName: displayName ?? entry.operation.displayName,
		endpoint: entry.operation.endpoint ?? entry.endpoint,
	};
};

interface ResourceGroup {
	name: string;
	displayName: string;
	description: string;
	operations: OperationRef[];
}

const resourceGroups: ResourceGroup[] = [
	{
		name: 'connectOnlyfansAccount',
		displayName: 'Connect OnlyFans Account',
		description: 'Authenticate OnlyFans accounts and manage login attempts.',
		operations: [
			'pollAuthenticationStatus',
			'submit2FA',
			'reAuthenticateAccount'
		],
	},
	{
		name: 'account',
		displayName: 'Account',
		description: 'Retrieve and manage OnlyFans account details.',
		operations: [
			'listAccounts',
			'getCurrentAccount',
			'getModelStartDate',
			'getTopPercentage',
			'disconnectAccount'
		],
	},
	{
		name: 'chats',
		displayName: 'Chats',
		description: 'Manage chats and related notifications.',
		operations: [
			'listChats',
			'listChatMediaGallery',
			'muteChatNotifications',
			'unmuteChatNotifications',
			'startTypingIndicator',
			'hideChat'
		],
	},
	{
		name: 'chatMessages',
		displayName: 'Chat Messages',
		description: 'Send, search, and manage chat messages.',
		operations: [
			'listChatMessages',
			'searchChatMessages',
			'sendMessage',
			'deleteMessage',
			'likeMessage',
			'unlikeMessage',
			'pinMessage',
			'unpinMessage'
		],
	},
	{
		name: 'massMessaging',
		displayName: 'Mass Messaging',
		description: 'Automate and manage mass messages.',
		operations: [
			'getMassMessageOverview',
			'listMassMessageQueue',
			'getMassMessage',
			'sendMassMessage',
			'updateMassMessage',
			'unsendDeleteMassMessage'
		],
	},
	{
		name: 'savedForLaterMessages',
		displayName: 'Saved For Later (Messages)',
		description: 'Work with saved-for-later message automations.',
		operations: [
			'listSavedForLaterMessages',
			{ name: 'getMessageSettings', displayName: 'Get Chat Message Settings' },
			'enableUpdateAutomaticMessaging',
			'disableAutomaticMessaging'
		],
	},
	{
		name: 'posts',
		displayName: 'Posts',
		description: 'Create, update, and manage posts.',
		operations: [
			'listPosts',
			'getPost',
			'sendPost',
			'updatePost',
			'showPostStatistics',
			'pinUnpinPost',
			'archivePost',
			'unarchivePost',
			'deletePost'
		],
	},
	{
		name: 'postLabels',
		displayName: 'Post Labels',
		description: 'Organize posts with labels.',
		operations: [
			'listLabels',
			'createLabel'
		],
	},
	{
		name: 'postComments',
		displayName: 'Post Comments',
		description: 'Moderate and interact with post comments.',
		operations: [
			'listPostComments',
			'createPostComment',
			'deletePostComment',
			'likePostComment',
			'unlikePostComment',
			'pinPostComment',
			'unpinPostComment'
		],
	},
	{
		name: 'savedForLaterPosts',
		displayName: 'Saved For Later (Posts)',
		description: 'Manage saved-for-later post scheduling.',
		operations: [
			'listSavedForLaterPosts',
			'getPostSettings',
			'enableUpdateAutomaticPosting',
			'disableAutomaticPosting'
		],
	},
	{
		name: 'queue',
		displayName: 'Queue',
		description: 'Work with queued content and publishing.',
		operations: [
			'countQueueItems',
			'listQueueItems',
			'publishQueueItem'
		],
	},
	{
		name: 'fans',
		displayName: 'Fans',
		description: 'Inspect and manage fan information.',
		operations: [
			'listActiveFans',
			'listAllFans',
			'listExpiredFans',
			'listLatestFans',
			'setFansCustomName',
			'getFanNotes',
			'createEditFanNotes',
			'clearFanNotes'
		],
	},
	{
		name: 'following',
		displayName: 'Following',
		description: 'Review creators the account follows.',
		operations: [
			{ name: 'listActiveFollowings', displayName: 'List Active Following' },
			{ name: 'listAllFollowings', displayName: 'List All Following' },
			{ name: 'listExpiredFollowings', displayName: 'List Expired Following' }
		],
	},
	{
		name: 'userListCollections',
		displayName: 'User List Collections',
		description: 'Manage user lists and their members.',
		operations: [
			'listUserLists',
			'createUserList',
			'getUserList',
			'updateUserList',
			'deleteUserList',
			'listUserListUsers',
			{ name: 'addUsersToUserList', displayName: 'Add Users To User List' },
			'removeUserFromAUserList',
			'clearUserList'
		],
	},
	{
		name: 'mediaVault',
		displayName: 'Media Vault',
		description: 'Access and manage media stored in the vault.',
		operations: [
			'listVaultMedia',
			'getVaultMedia',
			'deleteVaultMedia'
		],
	},
	{
		name: 'mediaVaultLists',
		displayName: 'Media Vault Lists',
		description: 'Organize media vault lists and their contents.',
		operations: [
			'addMediaToList',
			'createVaultList',
			'deleteVaultList',
			'listVaultLists',
			'removeMediaFromList',
			'renameVaultList',
			'showVaultList'
		],
	},
	{
		name: 'media',
		displayName: 'Media',
		description: 'Upload and retrieve media files.',
		operations: [
			'scrapeMediaFromTheOnlyFansCDN',
			'uploadMediaToTheOnlyFansCDN'
		],
	},
	{
		name: 'freeTrialLinks',
		displayName: 'Free Trial Links',
		description: 'Create and review free trial links.',
		operations: [
			'createFreeTrialLink',
			'deleteFreeTrialLink',
			'listFreeTrialLinkSpenders',
			'listFreeTrialLinkSubscribers',
			'listFreeTrialLinks'
		],
	},
	{
		name: 'trackingLinks',
		displayName: 'Tracking Links',
		description: 'Create and track promo links.',
		operations: [
			'createTrackingLink',
			'deleteTrackingLink',
			'listTrackingLinkSpenders',
			'listTrackingLinkSubscribers',
			'listTrackingLinks'
		],
	},
	{
		name: 'transactions',
		displayName: 'Transactions',
		description: 'Review financial transactions.',
		operations: [
			'listTransactions'
		],
	},
	{
		name: 'statistics',
		displayName: 'Statistics',
		description: 'Gather analytics and performance metrics.',
		operations: [
			'calculateTotalTransactions',
			'getEarnings',
			'getProfileVisitors',
			'getSubscriberMetrics',
			'getSubscriberStatistics',
			'statisticsOverview'
		],
	},
	{
		name: 'chargebacks',
		displayName: 'Chargebacks',
		description: 'Monitor chargeback performance.',
		operations: [
			'calculateChargebackRatio',
			'listChargebackStatistics',
			'listChargebacks'
		],
	},
	{
		name: 'banking',
		displayName: 'Banking',
		description: 'Handle banking and compliance details.',
		operations: [
			'getAccountCountryDetails',
			'getBankPayoutDetails',
			'getDAC7FormDetails',
			'getLegalAndTaxStatus',
			'getLegalFormDetails',
			'listAvailablePayoutSystems',
			'listCountries'
		],
	},
	{
		name: 'payouts',
		displayName: 'Payouts',
		description: 'Review and schedule payouts.',
		operations: [
			'getAccountBalances',
			'getEarningStatistics',
			'getEligibility',
			'listPayoutRequests',
			'listTransactionsEarnings',
			'requestManualWithdrawal',
			'updatePayoutFrequency'
		],
	},
	{
		name: 'users',
		displayName: 'Users',
		description: 'Inspect and manage individual users.',
		operations: [
			'getUserDetails',
			'restrictUser',
			'unrestrictUser',
			'blockUser',
			'unblockUser'
		],
	},
	{
		name: 'publicProfiles',
		displayName: 'Public Profiles',
		description: 'Search and view public OnlyFans profiles.',
		operations: [
			'getProfileDetails',
			'searchProfiles'
		],
	},
	{
		name: 'notifications',
		displayName: 'Notifications',
		description: 'Read and manage notifications.',
		operations: [
			'getNotificationCounts',
			'getNotificationTabsOrder',
			'listNotifications',
			'markAllNotificationsAsRead',
			'searchUsersInNotifications',
			'updateNotificationTabsOrder'
		],
	},
	{
		name: 'onlyFansSettings',
		displayName: 'OnlyFans Settings',
		description: 'Review and update account settings.',
		operations: [
			'getSettings',
			'updateProfile',
			'checkUsernameAvailability'
		],
	},
	{
		name: 'socialMediaButtons',
		displayName: 'Social Media Buttons',
		description: 'Manage social media buttons displayed on profile.',
		operations: [
			'listSocialMediaButtons',
			'addSocialMediaButton',
			'updateSocialMediaButton',
			'deleteSocialMediaButton',
			{ name: 'reorderSocialMediaButtons', displayName: 'Reorder Social Media Button' }
		],
	},
	{
		name: 'webhooks',
		displayName: 'Webhooks',
		description: 'List and manage webhook subscriptions.',
		operations: [
			'listWebhooks',
			'listAvailableEvents',
			'createWebhook',
			'showWebhook',
			'updateWebhook',
			'deleteWebhook'
		],
	},
	{
		name: 'apiKeys',
		displayName: 'API Keys',
		description: 'Inspect authentication details.',
		operations: [
			'whoami'
		],
	},
	{
		name: 'clientSessions',
		displayName: 'Client Sessions',
		description: 'Create client sessions for API usage.',
		operations: [
			'createClientSession'
		],
	},
];

export const resources: EndpointResource[] = resourceGroups.map(group => ({
	name: group.name,
	displayName: group.displayName,
	description: group.description,
	endpoint: '/',
	operations: group.operations.map(createOperation).map(operation => {
		const prefixes = [
			`${group.displayName} `,
			`${group.displayName} - `,
			`${group.displayName}: `,
		];

		let displayName = operation.displayName;
		for (const prefix of prefixes) {
			if (displayName.startsWith(prefix)) {
				displayName = displayName.slice(prefix.length);
				break;
			}
		}

		return {
			...operation,
			displayName,
		};
	}),
}));

export const getResourceByName = (name: string): EndpointResource | undefined => {
	return resources.find(resource => resource.name === name);
};

export const getResourceOptions = () => {
	return resources.map(resource => ({
		name: resource.displayName,
		value: resource.name,
	}));
};

export const getOperationOptions = (resourceName: string) => {
	const resource = getResourceByName(resourceName);
	if (!resource) return [];
	return resource.operations.map(operation => ({
		name: operation.displayName,
		value: operation.name,
	}));
};

export const getOperation = (resourceName: string, operationName: string): Operation | undefined => {
	const resource = getResourceByName(resourceName);
	if (!resource) return undefined;
	return resource.operations.find(op => op.name === operationName);
};
