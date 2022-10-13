import { Component, ModuleWithComponentFactories } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from './model/signup';
import { User } from './model/user';
import { LoginpageService } from './service/loginpage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn: boolean = false;
  title = 'incedoDemoApp';

  username: string = '';
  password: string = '';
  userList: Signup[] = []


  constructor(private _httppService: LoginpageService, private router: Router) { }

}

  // clickMessage: string = 'Morning';
  // onClickMe() {
  //     this.clickMessage = ' Training! is Active ';
  //   console.log('event fired !!--->');


