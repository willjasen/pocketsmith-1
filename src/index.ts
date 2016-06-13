import Accounts from './accounts';
import Categories from './categories';
import Me from './me';

import * as Promise from 'bluebird';
import Client from './client';

class PocketSmith {

	public Accounts: Accounts;
	public Categories: Categories;
	public Me: Me;

	constructor(public token: string) {
		this.token = ((t: string) => {
			return (/^Key|Bearer/i.test(t)) ? t : `Key ${t}`;
		})(this.token);

		Client.token = this.token;

		this.Accounts = Accounts;
		this.Categories = Categories;
		this.Me = void 0;
	}

	public init(): Promise<any> {
		var self:PocketSmith = this;
		
		return new Promise((resolve) => {
			if (this.Me === void 0) {
				((this.Me = new Me()), this.Me.init()).then(() => {
					
					Client.Me = this.Me;
					
					resolve(self);
				});
			} else {
				resolve(self);
			}

		});
	}
}

export = PocketSmith;