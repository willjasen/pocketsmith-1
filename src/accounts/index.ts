interface AccountInterface {

}

import * as Promise from 'bluebird';
import Client from '../client';

class Accounts {
	constructor() {

	}

	getAll(): PromiseLike<Array<AccountInterface>> {
		return new Promise((resolve) => {

		})
	}
}

export default Accounts;
