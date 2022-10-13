import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { identifierName } from '@angular/compiler';
    

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

   
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
  constructor(private httpClient:HttpClient) { }
  //
  // get method implementation()
  //

  getUser(): Observable<any>{
    let getUrl:string = "http://localhost:3002/userList/list";
    return this.httpClient.get(getUrl,{headers: this.headers});
  }

  getUserById(id:number): Observable<any>{
    let getUserUrl:string = "http://localhost:3002/userList/get/" + id;
    return this.httpClient.get(getUserUrl,{headers: this.headers});
  }

  deleteUser(id:number) {
    let getUserUrl: string = "http://localhost:3002/userList/delete/" + id;
    return this.httpClient.delete(getUserUrl,{headers: this.headers});
  }

  addNewUser(user:User) {
    let getUserUrl: string = "http://localhost:3002/userList/create";
    return this.httpClient.post(getUserUrl, user,{headers: this.headers});
  }

  confirmEdited(user:User) {
    let getUserUrl: string = "http://localhost:3002/userList/update/" + user.id;
    return this.httpClient.put(getUserUrl, user,{headers: this.headers});
  }

}
