import type { OptionsWithUri } from 'request';

import type {
	IDataObject,
	IExecuteFunctions,
	ILoadOptionsFunctions,
	IHookFunctions,
	IWebhookFunctions,
} from 'n8n-workflow';

export async function boomerangmeApiRequest(
	this: IExecuteFunctions | IWebhookFunctions | IHookFunctions | ILoadOptionsFunctions,
	method: string,
	resource: string,
	body: any = {},
	query: IDataObject = {},
	uri?: string,
	option: IDataObject = {},
): Promise<any> {
	const headers: IDataObject = {
		'Content-Type': 'application/json',
	};

	let endpoint = 'https://api.digitalwallet.cards';

	let options: OptionsWithUri = {
		headers,
		method,
		body,
		qs: query,
		uri: uri || `${endpoint}${resource}`,
		json: true,
	};

	if (!Object.keys(body as IDataObject).length) {
		delete options.form;
	}
	if (!Object.keys(query).length) {
		delete options.qs;
	}
	options = Object.assign({}, options, option);
	return this.helpers.requestWithAuthentication.call(this, 'boomerangmeApi', options);
}
