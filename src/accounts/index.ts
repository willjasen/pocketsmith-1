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
	getAllByUser(userId: number, callback?: Function): PromiseLike<Array<AccountInterface>> {
		return Client.get(`users/${userId}/accounts`, callback);
	}
	
	get(id: number, callback?: Function):PromiseLike<AccountInterface> {
		return Client.get(`accounts/${id}`, callback);
	}
}

export default Accounts;
