import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin-product-form',
	templateUrl: './admin-product-form.component.html',
styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

	categories$: any;

	constructor(
		private router: Router,
		private categoryService: CategoryService,
		private productService: ProductService
	) {
		this.categories$ = categoryService.getCategories();

		console.log( this.categories$ )

		this.categories$
			.subscribe( s => console.log( s ) )
	}

	ngOnInit() {
	}

	saveForm( p_products ) {
		this.productService.create( p_products );
		this.router.navigate( ['/admin/products'] );
	}

}
