import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,MinLengthValidator,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      username:new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(30)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      name:new FormControl(null,[Validators.required, Validators.minLength(3)]),
      gender:new FormControl(null),
      skills:new FormControl(null),
      aboutyourself:new FormControl(null)
    });
  }
  getControls(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.valid){
    console.log(this.registerForm.value)
    }
  }
  

}
