import { INodeProperties } from 'n8n-workflow';

export const companyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['company'],
			},
		},
		options: [
			{
				name: 'List of Companies',
				value: 'list',
				action: 'List of companies',
				routing: {
					request: {
						method: 'GET',
						url: '/companies',
					},
				},
			},
			{
				name: 'Get Company',
				value: 'get',
				action: 'Get company',
				routing: {
					request: {
						method: 'GET',
						url: '={{ "/companies/" + $parameter.companyId }}',
					},
				},
			},
		],
		default: 'list',
	},
];

const getOperation: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'companyId',
		default: '',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['get'],
			},
		},
		type: 'string',
		required: true,
	},
];

export const companyFields: INodeProperties[] = [
	...getOperation,
];
