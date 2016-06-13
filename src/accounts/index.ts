interface AccountInterface {
	id: number,
    title: string,
    currency_code: string,
    current_balance: number,
    current_balance_date: string,
    type: string,
    is_net_worth: Boolean
}

import * as Promise from 'bluebird';
import Client from '../client';

export default class Accounts {
	static get(id: number, callback?: Function): Promise<AccountInterface> {
		return Client.get(`accounts/${id}`, callback);
	}

	static getAllByUser(userId: number, callback?: Function): Promise<Array<AccountInterface>> {
		return Client.get(`users/${userId}/accounts`, callback);
	}

	static getAllByInstitution(institutionId: number, callback?: Function): Promise<Array<AccountInterface>> {
		return Client.get(`institutions/${institutionId}/accounts`, callback);
	}

	public static getAll(callback?: Function): Promise<Array<AccountInterface>> {
		if (Client.Me.data) {
			return this.getAllByUser(Client.Me.data.id, callback);
		} else {
			throw new Error('PocketSmith: Please init a `me` PocketSmith inistance. Eg: (new PocketSmith(\'token\')).init().then(() => { ... })');
		}
	}
}
