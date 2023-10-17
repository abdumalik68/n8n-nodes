import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbFields, httpVerbOperations } from './HttpVerbDescription';

export class Boomerangme implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Boomerangme',
		name: 'boomerangme',
		icon: 'file:logo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Boomerangme API',
		defaults: {
			name: 'Boomerangme',
			color: 'F5F900',
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
						name: 'HTTP Verb',
						value: 'httpVerb',
					},
				],
				default: 'httpVerb',
			},

			...httpVerbOperations,
			...httpVerbFields,
		],
	};
}
