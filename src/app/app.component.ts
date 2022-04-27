import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  labelText: string = 'Some title';
  isDisabled: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'control': [null, [Validators.required, Validators.minLength(2)]]
    })
  }

  clearControl(): void {
    this.form.get('control')?.reset();
    this.form.get('control')?.markAsDirty();
  }

  toggleDisableControl(): void {
    this.isDisabled = !this.isDisabled;
    this.form.get('control')?.disabled ? this.form.get('control')?.enable() : this.form.get('control')?.disable();
  }
}
