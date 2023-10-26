import type {
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';

import { boomerangmeApiRequest } from './GenericFunctions';

export class BoomerangmeTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Boomerangme Trigger',
		name: 'boomerangmeTrigger',
		icon: 'file:logo.svg',
		group: ['trigger'],
		version: 1,
		subtitle: '={{ $parameter["event"] }}',
		description: 'Starts the workflow when Boomerangme events occur.',
		defaults: {
			name: 'Boomerangme Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'boomerangmeApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				options: [

					{
						name: 'CardBalanceUpdatedEvent',
						value: 'CardBalanceUpdatedEvent',
					},
					{
						name: 'CardExpiredEvent',
						value: 'CardExpiredEvent',
					},
					{
						name: 'CardInstalledEvent',
						value: 'CardInstalledEvent',
					},
					{
						name: 'CardIssuedEvent',
						value: 'CardIssuedEvent',
					},
					{
						name: 'CardRemovedEvent',
						value: 'CardRemovedEvent',
					},
					{
						name: 'CardScannedEvent',
						value: 'CardScannedEvent',
					},
					{
						name: 'CompanyCreatedEvent',
						value: 'CompanyCreatedEvent',
					},
					{
						name: 'CompanyRemovedEvent',
						value: 'CompanyRemovedEvent',
					},
					{
						name: 'CustomerCreatedEvent',
						value: 'CustomerCreatedEvent',
					},
					{
						name: 'CustomerReferralCreatedEvent',
						value: 'CustomerReferralCreatedEvent',
					},
					{
						name: 'CustomerSegmentLinkedEvent',
						value: 'CustomerSegmentLinkedEvent',
					},
					{
						name: 'FeedbackCreatedEvent',
						value: 'FeedbackCreatedEvent',
					},
					{
						name: 'ManagerCreatedEvent',
						value: 'ManagerCreatedEvent',
					},
					{
						name: 'ManagerRemovedEvent',
						value: 'ManagerRemovedEvent',
					},
					{
						name: 'PaymentCompletedFailedEvent',
						value: 'PaymentCompletedFailedEvent',
					},
					{
						name: 'PaymentCompletedSuccessfulEvent',
						value: 'PaymentCompletedSuccessfulEvent',
					},
					{
						name: 'PaymentRefundedEvent',
						value: 'PaymentRefundedEvent',
					},
					{
						name: 'RecurrentPaymentCompletedFailedEvent',
						value: 'RecurrentPaymentCompletedFailedEvent',
					},
					{
						name: 'TariffPaymentCreatedEvent',
						value: 'TariffPaymentCreatedEvent',
					},
					{
						name: 'UserTemplateActivatedEvent',
						value: 'UserTemplateActivatedEvent',
					},
					{
						name: 'UserTemplateCreatedEvent',
						value: 'UserTemplateCreatedEvent',
					},
					{
						name: 'UserTemplateDeactivatedEvent',
						value: 'UserTemplateDeactivatedEvent',
					},
					{
						name: 'UserTemplateRemovedEvent',
						value: 'UserTemplateRemovedEvent',
					},
					{
						name: 'UserTemplateUpdatedEvent',
						value: 'UserTemplateUpdatedEvent',
					},
				],
				default: 'CompanyCreatedEvent',
				required: true,
			},
		],
	};



	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				return false;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const webhookUrl = this.getNodeWebhookUrl('default');
				const event = this.getNodeParameter('event') as string;

				const body = {
					url: webhookUrl,
					events: [event],
				};

				const responseData = await boomerangmeApiRequest.call(this, 'POST', '/api/automation/webhooks', body);

				if (responseData.data.id === undefined) {
					// Required data is missing so was not successful
					return false;
				}

				webhookData.webhookId = responseData.data.id as string;
				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');

				if (webhookData.webhookId !== undefined) {
					try {
						await boomerangmeApiRequest.call(this, 'DELETE', `/api/automation/webhooks/${webhookData.webhookId}`);
					} catch (error) {
						return false;
					}

					// Remove from the static workflow data so that it is clear
					// that no webhooks are registered anymore
					delete webhookData.webhookId;
				}

				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData();
		return {
			workflowData: [this.helpers.returnJsonArray(bodyData)],
		};
	}

}
