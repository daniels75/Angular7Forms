import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html',
  styles: []
})
export class DemoFormWithEventsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  ngOnInit() {
  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => { console.log('First observer - sku changed to:', value); },
      (error: any) => console.log('Error', error)
    );

    this.sku.valueChanges.subscribe({
      next: value =>  console.log('Second observer - sku changed to:', value),
      error: (err: any) => console.log('error: ', err)
      }

    );

    this.sku.valueChanges.subscribe({
        next: (value: string) => console.log('Third observer - sku changed to:', value)
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );

  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form.sku);
  }

}
