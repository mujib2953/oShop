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

	get( p_productId: string ) {
		return this.db.object( `/products/${p_productId}` ).valueChanges();
	}

	update( p_productId: string, p_product: any ) {
		return this.db.object( `/products/${ p_productId }` ).update( p_product );
	}
}
