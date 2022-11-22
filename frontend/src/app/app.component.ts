import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AppService } from './app.service';
import { authConfig } from './authConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  text = '';

  constructor(private oauthService: OAuthService, private appService: AppService) {
    this.configure();
    appService.hello().subscribe(response => {
      this.text = response;
    });
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  logout() {
    this.oauthService.logOut();
  }
}
