import { Injectable } from '@angular/core';
import {HTTPRequest} from '../app-http-request/http-request';
import {CrudOpertions} from '../crud-operations';
@Injectable({
  providedIn: 'root'
})
export class ProblemsService{
  
  constructor(private hTTPRequest:HTTPRequest) { }
  
}
