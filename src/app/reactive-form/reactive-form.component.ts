import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(),
      ischecked: new FormControl(true),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
        pincode: new FormControl(),
      }),
    });

    this.reactiveForm.controls['ischecked'].disable();
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  setAllValues() {
    this.reactiveForm.setValue({
      firstname: 'Meghana',
      lastname: 'Dharmaraju',
      email: 'meghana@gmail.com',
      password: 123,
      ischecked: true,
      address: {
        city: 'Ramanagara',
        street: 'MG Road',
        pincode: 1234
      }
    })
  }

  resetValues() {
    this.reactiveForm.reset();
    // this.reactiveForm.controls['firstname'].reset();
  }
  
  patchValues() {
    this.reactiveForm.patchValue({
      address: {
        city: 'Ramanagara',
        street: 'MG Road',
        pincode: 1234
      }
    })

    // this.reactiveForm.controls['firstname'].patchValue('Meghana');
  }


}
