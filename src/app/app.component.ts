import { Component } from '@angular/core';

import { SessionService } from './services/session.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	constructor(
		private sessionService: SessionService,
		private router: Router,

		private userService: UserService
	) {
		console.clear();
		sessionService
			.user$
			.subscribe( user => {

				if( user ) {
					
					let returnUrl = localStorage.getItem( 'returnUrl' );

					userService.save( user );

					router.navigateByUrl( returnUrl );
				}

			} );
	}
}
