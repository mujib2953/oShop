import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
		private sessonService: SessionService
	) {}

	ngOnInit() {
	}

	doLogin(): void {
		this.sessonService.doGoogleSignInUsingRedirect();
	}

}
