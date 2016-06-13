import MeInterface from './me';

import * as Request from 'request';
import * as Promise from 'bluebird';

class Client {
	public token: string;
	public Me: MeInterface = void 0;

	private resource(method: string, url: string, payload?: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Request({
				method: method,
				url: `https://api.pocketsmith.com/v2/${url}`,
				headers: {
					'Authorization': this.token,
					'Content-Type': 'application/json'
				}
			}, (e, req, body) => {
				if (e != null) {
					reject(e);
				} else {
					let returns: Object | string = void 0;

					try {
						returns = JSON.parse(body)
					} catch (e) {
						returns = body;
					}

					resolve(returns);
				}
			})
		});
	}

	private frame(method: string, url:string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.resource(method, url)
				.then((resp) => {
					resolve(resp);
				}, (e) => {
					reject(e);
				});
		});
	}

	get(url: string, callback?: Function): Promise<any> {
		let prom = this.frame('GET', url);

		if (callback) {
			prom.then((resp) => {
				callback(resp);
			});
		}

		return prom;
	}
}

export default new Client();
