import * as Request from 'request';
import * as Promise from 'bluebird';

class Client {
	public token: string;

	constructor() {

	}

	get(url: string): PromiseLike<any> {
		return new Promise((resolve, reject) => {
			Request.get(`https://api.pocketsmith.com/v2/${url}`, {
				headers: {
					'Authorization': this.token,
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
}

export default new Client();
