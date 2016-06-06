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
	getAll(userId: number, callback?: Function): PromiseLike<Array<AccountInterface>> {
		return Client.get(`users/${userId}/accounts`, callback);
	}
}

export default Accounts;
