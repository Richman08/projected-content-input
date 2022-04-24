import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  labelText: string = 'Some title';
  control: FormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  isDisabled: boolean = false;
  icon: string = 'close'

  toggleDisableControl(): void {
    this.isDisabled = !this.isDisabled;
  }
}
