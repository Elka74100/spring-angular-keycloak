import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

  constructor(private httpClient: HttpClient) {
  }

  getFoos(): Observable<string> {
    return this.httpClient.get("http://localhost:8081/api/",
      {headers: this.headers, responseType: 'text'});
  }

  addFoo() {
    return this.httpClient.post("http://localhost:8081/api/", null,
    {headers: this.headers, responseType: 'text'});
  }

}