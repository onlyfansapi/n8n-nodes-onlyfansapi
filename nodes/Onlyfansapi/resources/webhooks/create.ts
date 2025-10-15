import type { INodeProperties } from 'n8n-workflow';

export const webhooksCreateDescription: INodeProperties[] = [
	{
		displayName: 'Endpoint URL',
		name: 'endpoint_url',
		type: 'string',
		required: true,
		default: '',
		description: 'The URL of your webhook endpoint',
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Events',
		name: 'events',
		type: 'multiOptions',
		required: true,
		default: [],
		options: [
			{
				name: 'Accounts: Authentication Failed',
				value: 'accounts.authentication_failed',
			},
			{
				name: 'Accounts: Connected',
				value: 'accounts.connected',
			},
			{
				name: 'Accounts: Face OTP Required',
				value: 'accounts.face_otp_required',
			},
			{
				name: 'Accounts: OTP Code Required',
				value: 'accounts.otp_code_required',
			},
			{
				name: 'Accounts: Reconnected',
				value: 'accounts.reconnected',
			},
			{
				name: 'Accounts: Session Expired',
				value: 'accounts.session_expired',
			},
			{
				name: 'Messages: PPV Unlocked',
				value: 'messages.ppv.unlocked',
			},
			{
				name: 'Messages: Received',
				value: 'messages.received',
			},
			{
				name: 'Messages: Sent',
				value: 'messages.sent',
			},
			{
				name: 'Posts: Liked',
				value: 'posts.liked',
			},
			{
				name: 'Subscriptions: New',
				value: 'subscriptions.new',
			},
			{
				name: 'Users: Typing',
				value: 'users.typing',
			},
		],
		description: 'An array of webhook events to subscribe to',
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Signing Secret',
				name: 'signing_secret',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Optionally, add a signing secret to protect your webhook',
			},
		],
	},
];

