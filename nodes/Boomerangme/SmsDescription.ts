import { INodeProperties } from 'n8n-workflow';

export const smsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['sms'],
			},
		},
		options: [
			{
				name: 'Send SMS to Customer',
				value: 'send',
				action: 'Send SMS',
				routing: {
					request: {
						method: 'POST',
						url: '/sms',
						body: {
							customerId: '={{ $parameter.customerId }}',
							message: '={{ $parameter.message }}',
						},
						json: true,
					},
				},
			},
		],
		default: 'send',
	},
];

const sendOperation: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		default: '',
		displayOptions: {
			show: {
				resource: ['sms'],
				operation: ['send'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Message',
		name: 'message',
		default: '',
		displayOptions: {
			show: {
				resource: ['sms'],
				operation: ['send'],
			},
		},
		type: 'string',
		required: true,
	},
];

export const smsFields: INodeProperties[] = [
	...sendOperation,
];
