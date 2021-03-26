import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { ValidationsComponent } from './validations/validations.component';

const routes: Routes = [
  {path:"formValidation",component:FormValidationComponent},
  {path:"Reactive",component:ReactiveComponent},
  {path:"Template",component:TemplateComponent},
  {path:"validations",component:ValidationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
