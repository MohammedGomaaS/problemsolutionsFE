import { Injectable } from '@angular/core';
import {HTTPRequest} from '../app-http-request/http-request';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hTTPRequest:HTTPRequest) { 

  }
  login(userData){
    return this.hTTPRequest.create(userData,"/authentication");
  }
}
