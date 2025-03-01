import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;
  // // using formgroup

  // constructor() {
  //   this.reactiveForm = new FormGroup({
  //     firstname: new FormControl(''),
  //     lastname: new FormControl(''),
  //     email: new FormControl(''),
  //     password: new FormControl(),
  //     ischecked: new FormControl(true),
  //     address: new FormGroup({
  //       city: new FormControl(''),
  //       street: new FormControl(''),
  //       pincode: new FormControl(),
  //     }),
  //   });

  //   this.reactiveForm.controls['ischecked'].disable();
  // }

  // //using form builder we can switch to formbuilder or fromgroup without making any changes to template

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required,Validators.maxLength(15), Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      ischecked: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: [''],
      }),
      // // this is formarray
      skills: this.fb.array([]),
    });
    this.reactiveForm.controls['ischecked'].disable();
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  newSkills(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }

  addSkill() {
    this.skills.push(this.newSkills());
  }

  deleteSkill(index: number) {
    this.skills.removeAt(index);
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
        pincode: 1234,
      },
    });
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
        pincode: 1234,
      },
    });

    // this.reactiveForm.controls['firstname'].patchValue('Meghana');
  }
}
