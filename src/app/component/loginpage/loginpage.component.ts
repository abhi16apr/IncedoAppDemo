import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/signup';
import { User } from 'src/app/model/user';
import { LoginpageService } from 'src/app/service/loginpage.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  isLoggedIn: boolean = false;
  username: string = '';
  password: string = '';
  userList: Signup[] = [];

  constructor(private _httpService: LoginpageService, private router: Router) {


  }

  ngOnInit(): void {
  }

  login() {
    this._httpService.getUserLogin().subscribe(data => {
      this.userList = data;
      if (this.userList.find(x => x.username == this.username) != undefined) {
        let user = this.userList.find(x => x.username == this.username);

        if (user?.password != this.password) {
          alert('Trying to log in with [$(user?.username}]. Password is incorrect')
          this.username = ''
          this.password = ''
        } else {
          this.isLoggedIn = true;
          this.router.navigate(['/dashboard'])
        }
      }
      else {
        alert('No data is associated with this username ${this.username}')
        this.username = ''
        this.password = ''
      }

    });

  }

  register(){
    this._httpService.addSignup(new Signup(this.username, this.password)).subscribe();
    alert(`You signed up with the username ${this.username}. Now, you will be deridected to login page.`)
    this.router.navigate(['/login'])
   }
 

}
