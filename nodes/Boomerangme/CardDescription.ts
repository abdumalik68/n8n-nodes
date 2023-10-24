import { INodeProperties } from 'n8n-workflow';

export const cardOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['card'],
			},
		},
		options: [
			{
				name: 'List of Cards',
				value: 'list',
				action: 'List of cards',
				routing: {
					request: {
						method: 'GET',
						url: '/cards',
						qs: {
							templateId: '={{ $parameter.templateId }}',
							customerId: '={{ $parameter.customerId }}',
							customerEmail: '={{ $parameter.customerEmail }}',
							customerPhone: '={{ $parameter.customerPhone }}',
						},
					},
				},
			},
			{
				name: 'Get Card',
				value: 'get',
				action: 'Get card',
				routing: {
					request: {
						method: 'GET',
						url: '={{ "/cards/" + $parameter.cardId }}',
					},
				},
			},
			{
				name: 'Create Card',
				value: 'create',
				action: 'Create card',
				routing: {
					request: {
						method: 'POST',
						url: '/cards',
						body: {
							templateId: '={{ $parameter.templateId }}',
							customerId: '={{ $parameter.customerId }}',
						},
						json: true,
					},
				},
			},
		],
		default: 'list',
	},
];

const listOperation: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'templateId',
		default: '',
		description: 'Filter by templateId',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['list'],
			},
		},
		type: 'string',
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		default: '',
		description: 'Filter by customerId',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['list'],
			},
		},
		type: 'string',
	},
	{
		displayName: 'Customer Phone',
		name: 'customerPhone',
		default: '',
		description: 'Filter by customer phone',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['list'],
			},
		},
		type: 'string',
	},
	{
		displayName: 'Customer Email',
		name: 'customerEmail',
		default: '',
		description: 'Filter by customer email',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['list'],
			},
		},
		type: 'string',
	},
];

const getOperation: INodeProperties[] = [
	{
		displayName: 'Card ID',
		name: 'cardId',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['get'],
			},
		},
		type: 'string',
		required: true,
	},
];

const createOperation: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'templateId',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['create'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['create'],
			},
		},
		type: 'string',
		required: true,
	},
];

export const cardFields: INodeProperties[] = [
	...listOperation,
	...getOperation,
	...createOperation,
];
