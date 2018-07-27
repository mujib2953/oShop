import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-admin-products',
	templateUrl: './admin-products.component.html',
	styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

	// products$: any;
	products: any[];
	filteredProducts: any[];
	subscription: Subscription;

	constructor(
		private productService: ProductService
	) {}

	ngOnInit() {
		// this.products$ = this.productService.getAll();
		this.subscription = this.productService.getAll().subscribe( p => {
			this.filteredProducts = this.products = p;
		} );
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	filter( query: string ) {
		
		this.filteredProducts = ( query ) ?
			this.products.filter( p => {
				return p.payload.val().title.toLowerCase().includes( query.toLowerCase() )
			} ) :
			this.products;

	}

}
