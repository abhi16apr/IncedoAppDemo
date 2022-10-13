import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';
import { Signup } from 'src/app/model/signup';
import { LoginpageService } from 'src/app/service/loginpage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupList : Signup[] = []; //for user values
  newSignUp = new Signup('', ''); // dummy data

 constructor(private _httpService:LoginpageService, private router: Router) { }

  ngOnInit(): void {
  }
  signUp() {
  let addNewSignup = new Signup(this.newSignUp.username,
  this.newSignUp.password)
  this._httpService.addSignup(addNewSignup).subscribe();
  this.router.navigate(['/login'])
}

}
