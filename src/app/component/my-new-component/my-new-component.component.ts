import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  custArray: Array<Customer> = new Array();
  getData : any[] = [];
  model = new Customer('', 0);
  indexToEdit: number = -1;

  constructor(private _httpService: MyServiceService) { }

  ngOnInit(): void {
  }
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
    createCustomer() {
    console.log("customer creation here-->");

    // Add customer in Customer Array using push event.
    this.custArray.push(new Customer(this.model.name, this.model.age));
    console.log(JSON.stringify(this.custArray));
  }

  deleteCustomer(index : number){
    console.log("index of button to delete ->" + index)
    this.custArray.splice(index, 1);
    this.indexToEdit = -1;
  }

  editCustomer(index : number){

    this.model.name =  this.custArray[index].name;
    this.model.age = this.custArray[index].age;
    this.indexToEdit = index;
    console.log(`index to EDIT-> ${this.indexToEdit}`)
  }

  confirmEditCustomer(){
    this.custArray[this.indexToEdit] = this.model;
    this.model = new Customer('',0)
  }

  getUserDetails(){

    this._httpService.getUser() 
  
          .subscribe((res : any[])=>{
               console.log(res);
               //this.get.debug(res);
               this.getData = res;
      });
  }
  

}
