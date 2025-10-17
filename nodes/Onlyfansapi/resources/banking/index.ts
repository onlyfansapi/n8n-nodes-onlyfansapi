import type { INodeProperties } from 'n8n-workflow';
import { bankingGetAccountCountryDetailsDescription } from './getAccountCountryDetails';
import { bankingGetBankPayoutDetailsDescription } from './getBankPayoutDetails';
import { bankingGetDAC7FormDetailsDescription } from './getDAC7FormDetails';
import { bankingGetLegalAndTaxStatusDescription } from './getLegalAndTaxStatus';
import { bankingGetLegalFormDetailsDescription } from './getLegalFormDetails';
import { bankingListAvailablePayoutSystemsDescription } from './listAvailablePayoutSystems';
import { bankingListCountriesDescription } from './listCountries';

const showOnlyForBanking = {
	resource: ['banking'],
};

export const bankingDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForBanking,
		},
		options: [
			{
				name: 'Get Account Country Details',
				value: 'getAccountCountryDetails',
				action: 'Get account country details',
				description:
					"Returns the account owner's country details for banking, including country code, name, whether the country has states and zip codes, payout eligibility, and W9 form availability",
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/banking/details/account-country',
					},
				},
			},
			{
				name: 'Get Bank Payout Details',
				value: 'getBankPayoutDetails',
				action: 'Get bank payout details',
				description:
					"Returns the account owner's bank payout details, including whether payout data is filled, available payout methods with their descriptions, and required bank fields",
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/banking/details/bank',
					},
				},
			},
			{
				name: 'Get DAC7 Form Details',
				value: 'getDAC7FormDetails',
				action: 'Get DAC7 form details',
				description:
					"If available, returns the account owner's DAC7 form information required for tax reporting, including personal details, address, tax identification, country information, and DAC7 status",
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/banking/details/dac7-form',
					},
				},
			},
			{
				name: 'Get Legal and Tax Status',
				value: 'getLegalAndTaxStatus',
				action: 'Get legal and tax status',
				description:
					"Returns the account owner's legal and tax status required for banking and payout configuration, including W9 requirements, identity verification status, DAC7 compliance, and tax information",
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/banking/details/legal-info',
					},
				},
			},
			{
				name: 'Get Legal Form Details',
				value: 'getLegalFormDetails',
				action: 'Get legal form details',
				description:
					"Returns the account owner's legal form details for banking, including personal or business name, address, social media links, date of birth, and available document types for identity verification",
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/banking/details/legal-form',
					},
				},
			},
			{
				name: 'List Available Payout Systems',
				value: 'listAvailablePayoutSystems',
				action: 'List available payout systems',
				description:
					'Returns a list of available payout systems for the account, including details such as payout method codes, titles, descriptions, minimum payout amounts, processing times, and the currently selected payout method',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/banking/available-payout-systems',
					},
				},
			},
			{
				name: 'List Countries',
				value: 'listCountries',
				action: 'List countries',
				description: 'Returns a list of countries available for banking configuration',
				routing: {
					request: {
						method: 'GET',
						url: '{{.accountId}}/banking/countries',
					},
				},
			},
		],
		default: 'getAccountCountryDetails',
	},
	...bankingGetAccountCountryDetailsDescription,
	...bankingGetBankPayoutDetailsDescription,
	...bankingGetDAC7FormDetailsDescription,
	...bankingGetLegalAndTaxStatusDescription,
	...bankingGetLegalFormDetailsDescription,
	...bankingListAvailablePayoutSystemsDescription,
	...bankingListCountriesDescription,
];