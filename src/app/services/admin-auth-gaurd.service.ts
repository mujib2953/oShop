import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SessionService } from './session.service';

import { UserService } from './user.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class AdminAuthGaurdService implements CanActivate {

	constructor(
		private sessionService: SessionService,
		private userService: UserService
	) {}

	canActivate(): Observable<boolean> {
		
		return this.sessionService
			.appUser$
			.map( appUser => appUser.isAdmin )

	}
}
