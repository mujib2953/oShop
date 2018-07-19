import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';

@Component({
	selector: 'nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

	constructor(
		public sessionService: SessionService
	) {}

	ngOnInit() {
	}

	doLogout(): void  {
		this.sessionService.doGenericLogout();
	}

}
