import type { EndpointResource } from '../index';

import { getSettingsOperation } from './settings';

export const settingsResource: EndpointResource = {
	name: 'settings',
	displayName: 'Settings',
	description: 'Returns the account settings',
	endpoint: '/{account}/settings',
	operations: [getSettingsOperation],
};

import { updateProfileOperation } from './profile';

export const profileResource: EndpointResource = {
	name: 'profile',
	displayName: 'Profile',
	description: 'Updates the account profile. **Only include the fields you want to update.** To make a field empty, set it to `null`.',
	endpoint: '/{account}/settings/profile',
	operations: [updateProfileOperation],
};

import { checkUsernameAvailabilityOperation } from './usernameExists';

export const usernameExistsResource: EndpointResource = {
	name: 'usernameExists',
	displayName: 'Username-Exists',
	description: 'Check if a username is taken. Returns `false` if the username is available, `true` if it is already taken.',
	endpoint: '/{account}/settings/username-exists',
	operations: [checkUsernameAvailabilityOperation],
};

import { reorderSocialMediaButtonsOperation } from './reorder';

export const reorderResource: EndpointResource = {
	name: 'reorder',
	displayName: 'Reorder',
	description: 'Changes the order of social media buttons for the account',
	endpoint: '/{account}/settings/social-media-buttons/reorder',
	operations: [reorderSocialMediaButtonsOperation],
};

import { listSocialMediaButtonsOperation, addSocialMediaButtonOperation  } from './socialMediaButtons';

export const socialMediaButtonsResource: EndpointResource = {
	name: 'socialMediaButtons',
	displayName: 'Social-Media-Buttons',
	description: 'Returns the list of social media buttons for the account',
	endpoint: '/{account}/settings/social-media-buttons',
	operations: [listSocialMediaButtonsOperation, addSocialMediaButtonOperation],
};

import { updateSocialMediaButtonOperation, deleteSocialMediaButtonOperation  } from './buttonId';

export const buttonIdResource: EndpointResource = {
	name: 'buttonId',
	displayName: '{Button Id}',
	description: 'Updates a social media button from the account',
	endpoint: '/{account}/settings/social-media-buttons/{button_id}',
	operations: [updateSocialMediaButtonOperation, deleteSocialMediaButtonOperation],
};

export const settingsResources: EndpointResource[] = [
	settingsResource,
	profileResource,
	usernameExistsResource,
	reorderResource,
	socialMediaButtonsResource,
	buttonIdResource
];
