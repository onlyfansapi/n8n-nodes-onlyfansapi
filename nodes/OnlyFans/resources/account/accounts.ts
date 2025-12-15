import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listAccountsResource: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional filters to refine the account list',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'OnlyFans ID',
				name: 'onlyfans_id',
				type: 'string',
				default: '',
				description: 'Optionally, filter by the OnlyFans ID',
			},
			{
				displayName: 'OnlyFans Username',
				name: 'onlyfans_username',
				type: 'string',
				default: '',
				description: 'Optionally, filter by the OnlyFans username',
			},
			{
				displayName: 'OnlyFans Email',
				name: 'onlyfans_email',
				type: 'string',
				default: '',
				description: 'Optionally, filter by the OnlyFans email',
			},
		],
	},
];

export const listAccountsOperation = {
	name: 'listAccounts',
	displayName: 'List Accounts',
	method: 'GET' as const,
	parameters: listAccountsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

