import Accounts from './accounts';
import Client from './client';

class PocketSmith {

	public Accounts: Accounts;

	constructor(public token: string) {
		this.token = ((t: string) => {
			return (/^Key|Bearer/i.test(t)) ? t : `Key ${t}`;
		})(this.token);

		Client.token = this.token;

		this.Accounts = new Accounts();
	}
}

export = PocketSmith;
