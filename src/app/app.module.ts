import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationsComponent } from './validations/validations.component';

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    ReactiveComponent,
    TemplateComponent,
    ValidationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
