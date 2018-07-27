import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
	selector: 'app-admin-product-form',
	templateUrl: './admin-product-form.component.html',
	styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

	categories$: any;
	product: any = {};

	constructor(
		private router: Router,
		private route: ActivatedRoute,

		private categoryService: CategoryService,
		private productService: ProductService
	) {
		this.categories$ = this.categoryService.getCategories();

		let id  = this.route.snapshot.paramMap.get( 'id' );
		if( id ) {
			productService.get( id ).take(1).subscribe( ( p ) => {
				this.product = p;
				console.log( p )
			} );
		}
	}

	ngOnInit() {
	}

	saveForm( p_products ) {
		this.productService.create( p_products );
		this.router.navigate( ['/admin/products'] );
	}

}
