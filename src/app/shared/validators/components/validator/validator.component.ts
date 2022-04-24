import { Component, Input } from '@angular/core';

@Component({
  selector: 'validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent {
  @Input() when!: boolean;
}
