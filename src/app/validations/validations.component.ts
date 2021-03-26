import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,MinLengthValidator,Validators } from '@angular/forms';
@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      associateName:new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(30), Validators.pattern('^[a-zA-Z]*$')]),
      id:new FormControl(null, [Validators.required, Validators.minLength(6),Validators.maxLength(6),Validators.pattern('^[0-9]*$')]),
        //project Id
      projectId: new FormControl(null, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[a-zA-Z0-9]*$')]),
       //shore
       shore: new FormControl(null, [Validators.required]),
       //Loc
       Loc : new FormControl(null,Validators.required),
       //skills
       skills:new FormControl(null),
       //uploadfile
       uploadfile: new FormControl(null, Validators.required),
       //comments
       comments : new FormControl(null, Validators.required),
       //aboutyourself
       aboutyourself: new FormControl(null, Validators.required)
  });
}
getControls(){
  return this.registerForm.controls;
}
offShore(){
  let chennai = document.getElementById("chennai");
  chennai.innerHTML = "Chennai";
  let banglore = document.getElementById("banglore");
  banglore.innerHTML ="Banglore";
  let hyderabad = document.getElementById("hyderabad");
  hyderabad.innerHTML = "Hyderabad";
  let pune = document.getElementById("pune");
  pune.innerHTML = "Pune";
  let kochi = document.getElementById("kochi");
  kochi.innerHTML = "Kochi";
  let us = document.getElementById("us");
  us.style.display = "none";
  let nonUs = document.getElementById("non-us");
  nonUs.style.display = "none";
}
onShore(){
  let chennai = document.getElementById("chennai");
  chennai.style.display = "none";
  let banglore = document.getElementById("banglore");
  banglore.style.display="none";
  let hyderabad = document.getElementById("hyderabad");
  hyderabad.style.display="none";
  let pune = document.getElementById("pune");
  pune.style.display="none";
  let kochi = document.getElementById("kochi");
  kochi.style.display="none";
  let us = document.getElementById("us");
  us.innerHTML = "US";
  us.style.display = "block";
  let nonUs = document.getElementById("non-us");
  nonUs.innerHTML ="Non US";
  nonUs.style.display = "block";
}
onSubmit(){
  this.submitted = true;
  if(this.registerForm.valid){
  console.log(this.registerForm.value)
  }
}
reset(){
  this.registerForm.reset();
}
}
