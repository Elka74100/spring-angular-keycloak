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
  isAuthorized = false;

  constructor(private oauthService: OAuthService, private appService: AppService) {
    this.initAuth();
  }

  ngOnInit() {
    if(this.oauthService.hasValidAccessToken()) {
      this.isAuthorized = true
      this.updateText()
    } else {
      this.oauthService.events.subscribe(event => {
        if (event.type === "token_received") {
          this.isAuthorized = true
          this.updateText()
        }
      })
    }
  }

  login() {    
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  addFoo() {
    this.appService.addFoo().subscribe()
    this.updateText()
  }

  private initAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  private updateText() {
    this.appService.hello().subscribe(response => {
      this.text = response;
    })
  }
}
