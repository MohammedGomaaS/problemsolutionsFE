import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../app-base-url/base-url';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
import { LocalStroage } from '../../app-local-storage/local-stroage';


@Injectable({
  providedIn: 'root'
})
export class HTTPRequest {
  private baseURL: string;
  private localStroage: LocalStroage;

  private options: RequestOptions;
  constructor(private http: Http) {
    this.baseURL = new BaseURL().getBaseURL();
    this.localStroage = new LocalStroage();
  }
  public create(requestBody, urlPart) {
    let body = JSON.stringify(requestBody);
    let headers = new Headers({
      'Authorization':this.localStroage.retrieveFromLocalStorage('accessToken'),// get it from the localstorage 
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.baseURL + urlPart, body, this.options);
  }
  search(searchParams: any[], urlPart) {
    let search = new URLSearchParams();
    for (let i = 0; i < searchParams.length; i++) {
      search.set(searchParams[i].key, searchParams[i].value);
    }
    return this.http.get(this.baseURL + urlPart, { search })
  }
  getById(urlPart, id) {
    return this.http.get(this.baseURL + urlPart + id)
  }
  update(requestBody, urlPart, id) {
    let body = JSON.stringify(requestBody);
    let headers = new Headers({
      'Authorization': this.localStroage.retrieveFromLocalStorage('accessToken'),// get it from the localstorage 
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: headers });
    return this.http
      .patch(this.baseURL + urlPart + id, body, this.options);
  }
  delete(urlPart, id) {
    let headers = new Headers({
      'Authorization': this.localStroage.retrieveFromLocalStorage('accessToken'),// get it from the localstorage 
      'Content-Type': 'application/json'
    });
    return this.http.delete(this.baseURL + urlPart + id, this.options)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);

    return Observable.throw(errMsg);
  }



}


