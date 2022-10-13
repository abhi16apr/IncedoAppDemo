import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';
import { User } from 'src/app/model/user';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {
userList:User [] = []; // user values or persons
user = new User(0, '', '', '', '', ''); // dummy data

  constructor(private _httpService: MyServiceService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){

    this._httpService.getUser() 
  
          .subscribe((res : any[])=>{
               console.log(res);
               //this.get.debug(res);
               this.userList = res;
      });
    }

    deleteUser(id:number){
      this._httpService.deleteUser(id).subscribe()
      this.getUserDetails();
    }

   
    editUser(id:number){
      this._httpService.getUserById(id).subscribe(data => {
        console.log(typeof(this.user.id) + " AND " + typeof(data[0].id))
        this.user.id = data[0].id;
        this.user.firstname = data[0].firstname;
        this.user.lastname = data[0].lastname;
        this.user.address= data[0].address;
        this.user.location = data[0].location;
        this.user.country = data[0].country; 
    });
      // sessionStorage.setItem('data', JSON.stringify(this.person));
      // console.log('->>'+JSON.stringify(this.person))
  
  }
  

    addNewUser() {
      let userToAdd = new User(this.user.id, this.user.firstname, this.user.lastname, this.user.address, this.user.location, this.user.country)
      console.log(userToAdd);
      this._httpService.addNewUser(userToAdd).subscribe();
      this.getUserDetails();
    }


    confirmUserEdit() {
      this._httpService.confirmEdited(this.user).subscribe();
      this.user = new User(0, '', '', '', '', '');
      this.getUserDetails();
      this.ngOnInit();
    }


  
  }