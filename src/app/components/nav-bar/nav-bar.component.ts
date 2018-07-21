import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';
import { AppUser } from '../../models/app-user';

@Component({
	selector: 'nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

	appUser: AppUser;

	constructor(
		private sessionService: SessionService
	) {
		sessionService.appUser$
			.subscribe( appUser => this.appUser = appUser );
	}

	ngOnInit() {
	}

	doLogout(): void  {
		this.sessionService.doGenericLogout();
	}

}
