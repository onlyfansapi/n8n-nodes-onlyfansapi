import type { EndpointResource } from '../index';

import { getBankPayoutDetailsOperation } from './bank';

export const bankResource: EndpointResource = {
	name: 'bank',
	displayName: 'Bank',
	description: 'Returns the account owner\'s bank payout details, including whether payout data is filled, available payout methods with their descriptions, and required bank fields.',
	endpoint: '/{account}/banking/details/bank',
	operations: [getBankPayoutDetailsOperation],
};

import { getLegalFormDetailsOperation } from './legalForm';

export const legalFormResource: EndpointResource = {
	name: 'legalForm',
	displayName: 'Legal-Form',
	description: 'Returns the account owner\'s legal form details for banking, including personal or business name, address, social media links, date of birth, and available document types for identity verification.',
	endpoint: '/{account}/banking/details/legal-form',
	operations: [getLegalFormDetailsOperation],
};

import { getLegalAndTaxStatusOperation } from './legalInfo';

export const legalInfoResource: EndpointResource = {
	name: 'legalInfo',
	displayName: 'Legal-Info',
	description: 'Returns the account owner\'s legal and tax status required for banking and payout configuration, including W9 requirements, identity verification status, DAC7 compliance, and tax information.',
	endpoint: '/{account}/banking/details/legal-info',
	operations: [getLegalAndTaxStatusOperation],
};

import { getDAC7FormDetailsOperation } from './dac7Form';

export const dac7FormResource: EndpointResource = {
	name: 'dac7Form',
	displayName: 'Dac7-Form',
	description: 'If available, returns the account owner\'s DAC7 form information required for tax reporting, including personal details, address, tax identification, country information, and DAC7 status.',
	endpoint: '/{account}/banking/details/dac7-form',
	operations: [getDAC7FormDetailsOperation],
};

import { getAccountCountryDetailsOperation } from './accountCountry';

export const accountCountryResource: EndpointResource = {
	name: 'accountCountry',
	displayName: 'Account-Country',
	description: 'Returns the account owner\'s country details for banking, including country code, name, whether the country has states and zip codes, payout eligibility, and W9 form availability.',
	endpoint: '/{account}/banking/details/account-country',
	operations: [getAccountCountryDetailsOperation],
};

import { listCountriesOperation } from './countries';

export const countriesResource: EndpointResource = {
	name: 'countries',
	displayName: 'Countries',
	description: 'List countries, their internal OnlyFans IDs, and their payment & tax information.',
	endpoint: '/{account}/banking/countries',
	operations: [listCountriesOperation],
};

import { listAvailablePayoutSystemsOperation } from './availablePayoutSystems';

export const availablePayoutSystemsResource: EndpointResource = {
	name: 'availablePayoutSystems',
	displayName: 'Available-Payout-Systems',
	description: 'Returns a list of available payout systems for the account, including details such as payout method codes, titles, descriptions, minimum payout amounts, processing times, and the currently selected payout method.',
	endpoint: '/{account}/banking/available-payout-systems',
	operations: [listAvailablePayoutSystemsOperation],
};

export const bankingResources: EndpointResource[] = [
	bankResource,
	legalFormResource,
	legalInfoResource,
	dac7FormResource,
	accountCountryResource,
	countriesResource,
	availablePayoutSystemsResource
];
