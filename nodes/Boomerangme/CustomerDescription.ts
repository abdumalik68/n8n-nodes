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
				name: 'List of Customers',
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
				name: 'Get Customer',
				value: 'get',
				action: 'Get customer',
				routing: {
					request: {
						method: 'GET',
						url: '={{ "/customers/" + $parameter.customerId }}',
					},
				},
			},
			{
				name: 'Create Customer',
				value: 'create',
				action: 'Create customer',
				routing: {
					request: {
						method: 'POST',
						url: '/customers',
						body: {
							firstName: '={{ $parameter.firstName }}',
							surname: '={{ $parameter.surname }}',
							phone: '={{ $parameter.phone }}',
							email: '={{ $parameter.email }}',
							gender: '={{ $parameter.gender }}',
							dateOfBirth: '={{ $parameter.dateOfBirth }}',
							externalUserId: '={{ $parameter.externalUserId }}',
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
	},
	{
		displayName: 'Email',
		name: 'email',
		default: '',
		placeholder: 'name@email.com',
		description: 'Filter by email',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
		type: 'string',
	},
];

const getOperation: INodeProperties[] = [
	{
		displayName: 'Customer ID',
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

const createOperation: INodeProperties[] = [
	{
		displayName: 'First Name',
		name: 'firstName',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Surname',
		name: 'surname',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
	},
	{
		displayName: 'Phone',
		name: 'phone',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Email',
		name: 'email',
		default: '',
		placeholder: 'name@email.com',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
	},
	{
		displayName: 'Gender',
		name: 'gender',
		default: '0',
		options: [
			{
				name: 'Unknown',
				value: '0',
			},
			{
				name: 'Male',
				value: '1',
			},
			{
				name: 'Female',
				value: '2',
			},
		],
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'options',
	},
	{
		displayName: 'Date of Birth',
		name: 'dateOfBirth',
		default: '',
		placeholder: '1999-10-10',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
	},
	{
		displayName: 'External User ID',
		name: 'externalUserId',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
	},
];

export const customerFields: INodeProperties[] = [
	...listOperation,
	...getOperation,
	...createOperation,
];
