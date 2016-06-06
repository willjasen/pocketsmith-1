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

	private frame(url: string, callback: Function): Promise<any> {
		let prom = new Promise((resolve, reject) => {
			Client.get(url)
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

	getAll(id: number, callback?: Function): PromiseLike<Array<AccountInterface>> {
		return this.frame(`users/${id}/accounts`, callback);
	}
}

export default Accounts;
