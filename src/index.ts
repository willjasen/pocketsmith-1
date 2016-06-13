import Accounts from './accounts';
import Categories from './categories';

import Client from './client';

class PocketSmith {

	public Accounts: Accounts;
	public Categories: Categories;

	constructor(public token: string) {
		this.token = ((t: string) => {
			return (/^Key|Bearer/i.test(t)) ? t : `Key ${t}`;
		})(this.token);

		Client.token = this.token;

		this.Accounts = Accounts;
		this.Categories = Categories;
	}
}

export = PocketSmith;