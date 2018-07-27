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
	id: string;

	constructor(
		private router: Router,
		private route: ActivatedRoute,

		private categoryService: CategoryService,
		private productService: ProductService
	) {
		this.categories$ = this.categoryService.getCategories();

		this.id  = this.route.snapshot.paramMap.get( 'id' );
		if( this.id ) {
			productService.get( this.id ).take(1).subscribe( ( p ) => {
				this.product = p;
				console.log( p )
			} );
		}
	}

	ngOnInit() {
	}

	saveForm( p_products ) {

		if( this.id )
			this.productService.update( this.id, p_products );
		else
			this.productService.create( p_products );
		this.router.navigate( ['/admin/products'] );
	}

}
