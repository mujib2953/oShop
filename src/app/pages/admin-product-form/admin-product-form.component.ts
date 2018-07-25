import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
	selector: 'app-admin-product-form',
	templateUrl: './admin-product-form.component.html',
styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

	categories$: any;

	constructor(
		categoryService: CategoryService
	) {
		this.categories$ = categoryService.getCategories();

		console.log( this.categories$ )

		this.categories$
			.subscribe( s => console.log( s ) )
	}

	ngOnInit() {
	}

	saveForm( p_products ) {
		console.log( p_products );
	}

	logg( s ) {
		console.log( s );
	}
}
