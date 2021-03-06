import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AxControlComponent } from "./shared/ui/input/ax-control.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidatorComponent } from "./shared/validators/components/validator/validator.component";

@NgModule({
  declarations: [
    AppComponent,
    AxControlComponent,
    ValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
