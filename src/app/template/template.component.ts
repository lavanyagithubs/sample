import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  users=[];
  userModal = new User();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){   
    let newObj=new User();
    newObj={...this.userModal}
    this.users.push(newObj)
}

}
export class User {
  public name: string;
  public email: string;
  public username: string;
  public password: string;
  
}

