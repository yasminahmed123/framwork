import { Component, input, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alertError',
  standalone: true,
  imports: [],
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.scss']
})
export class AlertErrorComponent {
  @Input() formName!: FormGroup;
  @Input() controlName!:string;

verifyCode: any;
}