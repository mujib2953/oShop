import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(
		private db: AngularFireDatabase
	) { }

	create( p_product: any ): any {
		return this.db.list( '/products' ).push( p_product )
	}

	getAll() {
		return this.db.list( '/products' ).snapshotChanges();
	}
}
