import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Signup } from '../model/signup';

 @Injectable({
   providedIn: 'root'
 })

// @Injectable()
// export interface City {
//   name: string;
//   countrycode: string;
//   district: string;
//   population: string;
//   providedIn: 'root'
// }

export class LoginpageService {

  apiURL : string = "http://localhost:3001/users";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');

  constructor(private httpClient:HttpClient) {}

  addSignup (signup:Signup){
    // let postSignupList:string ="http://localhost:4000/signup/create";
    return this.httpClient.post(this.apiURL + '/create',signup,{headers: this.headers});
  }

  getUserLogin(): Observable<any>{
    // let getUserUrl:string = "http://localhost:4000/signup/list";
    return this.httpClient.get(this.apiURL,{headers: this.headers});
  }


  // // get
  //  get(url: string) {
  //    return this.httpClient.get(url)
  //  }

  // // post
  //  post(url: string): Observable<City> {
  //    return this.httpClient.post(city, data: any)
  //  }

  //  // delete
  //  delete(url: string) {
  //    return this.httpClient.delete
  //  }

  //  // Update (put)
  //  put(url: string) {
  //    return this.httpClient.put
  //  }


  // getUsers(): Observable<any>{
  //   return this.httpClient.post(this.apiURL,{headers: this.headers});
  // }

  // registerUser(user: Signup){
  //   return this.httpClient.post(this.apiURL+"/create", user, {headers: this.headers});
  // }

}



