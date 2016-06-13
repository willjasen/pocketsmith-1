export interface MeInterface {
	id: number;
	login: string;
	name: string;
	email: string;
	avatar_url: string;
	beta_user: boolean;
	time_zone: string;
	week_start_day: number;
	base_currency_code: string;
	always_show_base_currency: boolean;
	using_multiple_currencies: boolean;
	created_at: string;
	updated_at: string;
}

import Client from '../client';
import * as Promise from 'bluebird';

export default class Me {
	public data: MeInterface;

	init(): Promise<any> {
		return new Promise((resolve) => {
			Client.get('me').then((res: MeInterface) => {
				this.data = res;
				resolve(res);
			});
		})
	}
}