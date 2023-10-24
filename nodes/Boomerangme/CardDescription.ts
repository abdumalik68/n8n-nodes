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
				name: 'Add Amount to Card',
				value: 'add_amount',
				action: 'Add amount to card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/add-transaction-amount" }}',
						body: {
							amount: '={{ $parameter.amount }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Add Point to Card',
				value: 'add_point',
				action: 'Add point to card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/add-point" }}',
						body: {
							points: '={{ $parameter.points }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Add Reward to Card',
				value: 'add_reward',
				action: 'Add reward to card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/add-reward" }}',
						body: {
							rewards: '={{ $parameter.rewards }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Add Scores to Card',
				value: 'add_score',
				action: 'Add scores to card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/add-scores" }}',
						body: {
							scores: '={{ $parameter.scores }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Add Stamp to Card',
				value: 'add_stamp',
				action: 'Add stamp to card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/add-stamp" }}',
						body: {
							stamps: '={{ $parameter.stamps }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Add Visit to Card',
				value: 'add_visit',
				action: 'Add visit to card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/add-visit" }}',
						body: {
							visits: '={{ $parameter.visits }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
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
			{
				name: 'Delete Card',
				value: 'delete',
				action: 'Delete card',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{ "/cards/" + $parameter.cardId }}',
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
				name: 'Receive Reward',
				value: 'receive_reward',
				action: 'Receive reward',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/receive-reward" }}',
						body: {
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Redeem Coupon',
				value: 'redeem_coupon',
				action: 'Redeem coupon',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/redeem-coupon" }}',
						body: {
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Subtract Amount From Card',
				value: 'subtract_amount',
				action: 'Subtract amount from card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/subtract-transaction-amount" }}',
						body: {
							amount: '={{ $parameter.amount }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Subtract Point From Card',
				value: 'subtract_point',
				action: 'Subtract point from card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/subtract-point" }}',
						body: {
							points: '={{ $parameter.points }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Subtract Reward From Card',
				value: 'subtract_reward',
				action: 'Subtract reward from card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/subtract-reward" }}',
						body: {
							rewards: '={{ $parameter.rewards }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Subtract Scores From Card',
				value: 'subtract_score',
				action: 'Subtract scores from card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/subtract-scores" }}',
						body: {
							scores: '={{ $parameter.scores }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Subtract Stamp From Card',
				value: 'subtract_stamp',
				action: 'Subtract stamp from card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/subtract-stamp" }}',
						body: {
							stamps: '={{ $parameter.stamps }}',
							comment: '={{ $parameter.comment }}',
						},
						json: true,
					},
				},
			},
			{
				name: 'Subtract Visit From Card',
				value: 'subtract_visit',
				action: 'Subtract visit from card',
				routing: {
					request: {
						method: 'POST',
						url: '={{ "/cards/" + $parameter.cardId + "/subtract-visit" }}',
						body: {
							visits: '={{ $parameter.visits }}',
							comment: '={{ $parameter.comment }}',
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

const oneOperation: INodeProperties[] = [
	{
		displayName: 'Card ID',
		name: 'cardId',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['get', 'delete'],
			},
		},
		type: 'string',
		required: true,
	},
];

const accrualOperations: INodeProperties[] = [
	{
		displayName: 'Card ID',
		name: 'cardId',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: [
					'add_stamp',
					'subtract_stamp',
					'add_amount',
					'subtract_amount',
					'add_point',
					'subtract_point',
					'add_reward',
					'subtract_reward',
					'add_score',
					'subtract_score',
					'add_visit',
					'subtract_visit',
					'redeem_coupon',
					'receive_reward',
				],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Stamps',
		name: 'stamps',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['add_stamp', 'subtract_stamp'],
			},
		},
		type: 'number',
		required: true,
	},
	{
		displayName: 'Amount',
		name: 'amount',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['add_amount', 'subtract_amount'],
			},
		},
		type: 'number',
		required: true,
	},
	{
		displayName: 'Points',
		name: 'points',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['add_point', 'subtract_point'],
			},
		},
		type: 'number',
		required: true,
	},
	{
		displayName: 'Rewards',
		name: 'rewards',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['add_reward', 'subtract_reward'],
			},
		},
		type: 'number',
		required: true,
	},
	{
		displayName: 'Scores',
		name: 'scores',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['add_score', 'subtract_score'],
			},
		},
		type: 'number',
		required: true,
	},
	{
		displayName: 'Visits',
		name: 'visits',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: ['add_visit', 'subtract_visit'],
			},
		},
		type: 'number',
		required: true,
	},
	{
		displayName: 'Comment',
		name: 'comment',
		default: '',
		displayOptions: {
			show: {
				resource: ['card'],
				operation: [
					'add_stamp',
					'subtract_stamp',
					'add_amount',
					'subtract_amount',
					'add_point',
					'subtract_point',
					'add_reward',
					'subtract_reward',
					'add_score',
					'subtract_score',
					'add_visit',
					'subtract_visit',
					'redeem_coupon',
					'receive_reward',
				],
			},
		},
		type: 'string',
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
	...oneOperation,
	...createOperation,
	...accrualOperations,
];