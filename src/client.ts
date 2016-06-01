import * as Request from 'request';
import * as Promise from 'bluebird';

class Client {
	public token: string;

	private resource(method: string, url: string, payload?: any): PromiseLike<any> {
		return new Promise((resolve, reject) => {
			Request({
				method: method,
				url: `https://api.pocketsmith.com/v2/${url}`,
				headers: {
					'Authorization': ((t) => {
						return (/Key/.test(t)) ? t : `Key ${t}`;
					})(this.token),
					'Content-Type': 'application/json'
				}
			}, (e, req, body) => {
				if (e != null) {
					reject(e);
				} else {
					resolve(JSON.parse(body));
				}
			})
		});
	}

	get(url: string): PromiseLike<any> {
		return this.resource('GET', url);
	}
}

export default new Client();
