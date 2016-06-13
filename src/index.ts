import Accounts from './accounts';
import Transactions from './transactions';

import Client from './client';

class PocketSmith {

	public Accounts: Accounts;
	public Transactions: Transactions;

	constructor(public token: string) {
		this.token = ((t: string) => {
			return (/^Key|Bearer/i.test(t)) ? t : `Key ${t}`;
		})(this.token);

		Client.token = this.token;

		this.Accounts = new Accounts();
		this.Transactions = new Transactions();
	}
}

export = PocketSmith;