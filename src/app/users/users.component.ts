import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // firstName:string = "";
  // lastName: string = "";
  email:string = "";
  userForm:FormGroup;
  isEdit:boolean = false;
  data:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      date: new FormControl('')
    });

    this.getUser();
  }

  getUser(){
    let result = localStorage.getItem('user');
    result = JSON.parse(result);
    this.data = result;
    console.log(this.data);

    for(let item of this.data){
      console.log(item.firstName);
    }
  }


  SaveUser(){
    this.userForm.controls['date'].setValue(new Date());
    let arr = JSON.parse(localStorage.getItem('user'));

    arr.push(this.userForm.value);
    var result = JSON.stringify(arr);
    localStorage.setItem('user',result);
    alert('Successfully saved!');
  }

  AddUser(){
    this.isEdit = false;

  }
}
