interface AccountInterface {

}

import * as Promise from 'bluebird';

class Accounts {
	getAll(): PromiseLike<Array<AccountInterface>> {
		return new Promise((resolve) => {

		})
	}
}

export default Accounts;
