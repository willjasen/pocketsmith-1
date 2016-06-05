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

	getAll(id: number): PromiseLike<Array<AccountInterface>> {
		return new Promise((resolve) => {
			Client.get(`users/${id}/accounts`).then((resp) => {
				resolve(resp);
			})
		})
	}
}

export default Accounts;
