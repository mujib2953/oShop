import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from '../app-user';
import { Observable } from '../../../node_modules/rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private db: AngularFireDatabase
	) {}

	save( user: firebase.User ): void {

		this.db
			.object( '/users/' + user.uid )
			.update({
				name: user.displayName,
				email: user.email
			});
	}

	// get( uid: string ): AngularFireObject<AppUser> {
	get( uid: string ): Observable<any> {
		return this.db.object( `/users/${uid}` ).valueChanges();
	}
}
