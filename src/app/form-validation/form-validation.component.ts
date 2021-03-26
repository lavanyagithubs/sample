import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerSubmit(ref){
      
  }
  empobj = new Employee();

  Employees=[
    {
      
      
      id: 101,
      name: "John",
      skills: "Reactjs,Angular,js",
      project: "Cognizant Internal",
      HCM: "Alex"
    },
    {
      
      id: 102,
      name: "Elsa",
      skills: "Reactjs,Angular,js",
      project: "Cognizant Internal",
      HCM: "Alex"
    },
    {
      
      id: 103,
      name: "Anna",
      skills: "Reactjs,Angular,js",
      project: "Cognizant Internal",
      HCM: "Alex"
    },
    {
      
      id: 104,
      name: "Jai",
      skills: "Reactjs",
      project: "Cognizant Internal",
      HCM: "Alex"
    },
    {
      
      id: 105,
      name: "Apex",
      skills: "Reactjs",
      project: "Cognizant Internal",
      HCM: "Alex"
    }
  ];
  status: boolean = true;
  refid :number;

  edit(id) {
    this.status = false;
    this.refid = id;
  }

  delete(id) {
    let i=0;
    for(let emp of this.Employees){
      if(emp.id === id){
        this.Employees.splice(i,1);
        break;
      }
      i++;
    }
    console.log(this.Employees);
  }

  save(id,n,skill,pro,hcm) {
    this.status =true;
    let i = 0;
    for(let emp of this.Employees){
      if(emp.id === id){
        this.Employees[i].name = n;
        this.Employees[i].skills = skill;
        this.Employees[i].project = pro;
        this.Employees[i].HCM = hcm;
        break;
      }
      i++;
    }
  }
}
export class Employee {
  public name: string;
  public id: number;
  public skills: string;
  public project: string;
  public HCM: string;
}
         


