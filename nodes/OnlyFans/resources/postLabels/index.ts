import type { EndpointResource } from '../index';

import { listLabelsOperation, createLabelOperation  } from './labels';

export const labelsResource: EndpointResource = {
	name: 'labels',
	displayName: 'Labels',
	description: 'List the labels that you can use to organize your posts.',
	endpoint: '/{account}/posts/labels',
	operations: [listLabelsOperation, createLabelOperation],
};

export const postLabelsResources: EndpointResource[] = [
	labelsResource
];
