interface CategoryInterface {
	
}

import * as Promise from 'bluebird';
import Client from '../client';

export default class Categories {
	static get(id: number, callback?: Function):PromiseLike<CategoryInterface> {
		return Client.get(`categories/${id}`, callback);
	}
	
	static getAllByUser(userId: number, callback?: Function): PromiseLike<Array<CategoryInterface>> {
		return Client.get(`users/${userId}/categories`, callback);
	}
}
