import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SessionService } from './session.service';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

	constructor(
		private sessionService: SessionService,
		private router: Router
	) { }

	canActivate( router, state: RouterStateSnapshot ) {
		return this.sessionService
			.appUser$
			.map( user => {

				if( user )
					return true;
				else {

					// --- redirect to login page
					this.router
						.navigate( [ '/login' ], { queryParams: { returnUrl: state.url } } );
					return false;

				}

			} );
	}
}
