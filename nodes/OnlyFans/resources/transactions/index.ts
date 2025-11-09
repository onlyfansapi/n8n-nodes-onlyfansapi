import type { EndpointResource } from '../index';

import { listTransactionsOperation } from './transactions';

export const transactionsResource: EndpointResource = {
	name: 'transactions',
	displayName: 'Transactions',
	description: 'Get a paginated list of transactions for an Account. Newest transactions are first.',
	endpoint: '/{account}/transactions',
	operations: [listTransactionsOperation],
};

export const transactionsResources: EndpointResource[] = [
	transactionsResource
];
