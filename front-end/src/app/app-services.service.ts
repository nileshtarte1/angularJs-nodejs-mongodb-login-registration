import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptionsArgs, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
 
  private _loginUrl = environment.apiUrl+"user/login";
  private _registrationUrl =environment.apiUrl+"user/register";
  
  constructor(private _http: Http) { 

  }

  // login service
  login(user): Observable<any> {
    return this._http.post(this._loginUrl, user);
  }

  // registration service
  register(userDetails):Observable<any>{
    return this._http.post(this._registrationUrl, userDetails);
  }
}
