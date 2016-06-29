import * as Promise from 'bluebird';
import {PocketSmithInterface, CategoryInterface} from '../interfaces';

export default class Categories {
	constructor(private context: PocketSmithInterface) {

	}

	get(id: number, callback?: Function): Promise<CategoryInterface> {
		return this.context.Client.get(`categories/${id}`, callback);
	}

	getAllByUser(userId: number, callback?: Function): Promise<Array<CategoryInterface>> {
		return this.context.Client.get(`users/${userId}/categories`, callback);
	}
}
