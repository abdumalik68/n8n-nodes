import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BoomerangmeApi implements ICredentialType {
	name = 'boomerangmeApi';
	displayName = 'Boomerangme API';
	documentationUrl = 'https://docs.digitalwallet.cards/';
	properties: INodeProperties[] = [
		{
			displayName: 'API key',
			name: 'apikey',
			type: 'string',
			default: '',
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{ $credentials.apikey }}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.digitalwallet.cards',
			url: '/api/automation/users/me',
		},
	};
}
