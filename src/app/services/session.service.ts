import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as  firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	
	user$: Observable<firebase.User>;

	constructor(
		private afAuth: AngularFireAuth,
		private route: ActivatedRoute,

		private userService: UserService
	) {
		this.user$ = afAuth.authState;
	}

	doGoogleSignInUsingRedirect(): void {
		
		let returnUrl = this.route.snapshot.queryParamMap.get( 'returnUrl' ) || '/';

		localStorage.setItem( 'returnUrl', returnUrl );

		this.afAuth
			.auth
			.signInWithRedirect( new firebase.auth.GoogleAuthProvider );
			
	}

	doGenericLogout(): void {

		this.afAuth
			.auth
			.signOut();

	}

	get appUser$(): Observable<any> {
		return this.user$.switchMap( user => {
			if( user )
				return this.userService.get( user.uid )
			
			return Observable.of( null );
		} );
			
	}
}
