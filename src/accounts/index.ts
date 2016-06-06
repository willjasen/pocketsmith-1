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

class Accounts {

	getAll(id: number, callback?: Function): PromiseLike<Array<AccountInterface>> {
		let prom = new Promise((resolve, reject) => {
			Client.get(`users/${id}/accounts`)
				.then((resp) => {
					resolve(resp);
				}, (e) => {
					reject(e);
				});
		});

		if (callback) {
			prom.then((resp) => {
				callback(resp);
			});
		}

		return prom;
	}
}

export default Accounts;
