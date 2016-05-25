import Accounts from './accounts';

class PocketSmith {

	public Accounts: Accounts;

	constructor(public token: string) {
		this.Accounts = new Accounts();
	}
}

export = PocketSmith;
