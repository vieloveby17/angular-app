import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postForm:FormGroup;
  data:any = [];
  isEdit:boolean = false;
  arr:any  = [];
  index:number = -1;
  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
    });
  }

  Post(){
    if (this.isEdit){
      this.data[this.index] = this.postForm.value;
    }else{
      this.data.push(this.postForm.value);
    }

    this.isEdit = false;

  }

  edit(item,i){
    this.isEdit = true;
    this.index = i;
    this.postForm.setValue(item);
  }

  delete(item){
    let conf = confirm('Are you sure you want to delete?')

    if (conf){
      this.data.splice(item,1)
    }
  }
}
