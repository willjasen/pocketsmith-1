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

// me 117736
// CBA 185477
// Gas 1990474
/*let p = (new PocketSmith('492ec014dcd7234541bf7b0bfd153533305f272d20fa702e04d5c24328264764f4edc9dd04701e5eaad71479efebda51eb933788e0c959a69507245a08cd3c32'));

p.Categories.get(1990474).then((r) => console.log(r));*/