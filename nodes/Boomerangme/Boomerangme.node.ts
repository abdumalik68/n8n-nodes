import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { customerFields, customerOperations } from './CustomerDescription';
import { cardFields, cardOperations } from './CardDescription';
import { companyFields, companyOperations } from './CompanyDescription';

export class Boomerangme implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Boomerangme',
		name: 'boomerangme',
		icon: 'file:logo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["resource"] + ": " + $parameter["operation"] }}',
		description: 'Interact with Boomerangme API',
		defaults: {
			name: 'Boomerangme',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'boomerangmeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.digitalwallet.cards/api/v2',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
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
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Card',
						value: 'card',
					},
					{
						name: 'Company',
						value: 'company',
					},
				],
				default: 'customer',
			},

			...customerOperations,
			...customerFields,
			...cardOperations,
			...cardFields,
			...companyOperations,
			...companyFields,
		],
	};
}
