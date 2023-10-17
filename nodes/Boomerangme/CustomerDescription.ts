import { INodeProperties } from 'n8n-workflow';

export const customerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['customer'],
			},
		},
		options: [
			{
				name: 'List of customers',
				value: 'list',
				action: 'List of customers',
				routing: {
					request: {
						method: 'GET',
						url: '/customers',
						qs: {
							phone: '={{ $parameter.phone }}',
							email: '={{ $parameter.email }}',
						},
					},
				},
			},
			{
				name: 'Get customer',
				value: 'get',
				action: 'Get customer',
				routing: {
					request: {
						method: 'GET',
						url: '={{ "/customers/" + $parameter.customerId }}',
					},
				},
			},
		],
		default: 'list',
	},
];

const listOperation: INodeProperties[] = [
	{
		displayName: 'Phone',
		name: 'phone',
		default: '',
		description: 'Filter by phone',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
		type: 'string',
		required: false,
	},
	{
		displayName: 'Email',
		name: 'email',
		default: '',
		description: 'Filter by email',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
		type: 'string',
		required: false,
	},
];

const getOperation: INodeProperties[] = [
	{
		displayName: 'Customer Id',
		name: 'customerId',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		type: 'string',
		required: true,
	},
];

export const customerFields: INodeProperties[] = [
	...listOperation,
	...getOperation,
];
