import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from './app.service';
import { authConfig } from './authConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  text$?: Observable<string>;
  isAuthorized = false;

  constructor(private oauthService: OAuthService, private appService: AppService) {
    this.initAuth();
  }

  ngOnInit() {
    if(this.oauthService.hasValidAccessToken()) {
      this.isAuthorized = true
      this.text$ =  this.appService.hello()
    } else {
      this.oauthService.events.subscribe(event => {
        if (event.type === "token_received") {
          this.isAuthorized = true
          this.text$ = this.appService.hello()
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
    this.appService.addFoo().subscribe(() => {
      this.text$ = this.appService.hello()
    })
  }

  private initAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
