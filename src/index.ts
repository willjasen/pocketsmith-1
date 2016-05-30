import Accounts from './accounts';
import Client from './client';

class PocketSmith {

	public Accounts: Accounts;

	constructor(public token: string) {

		Client.token = token;

		this.Accounts = new Accounts();
	}
}

export = PocketSmith;
