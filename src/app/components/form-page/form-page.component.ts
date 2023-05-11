import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
//import Validation from './utils/validation';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit{
  form:any;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        fullname: ['', Validators.required],
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        // password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
          
        // confirmPassword: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue]
      }
      // {
      //   validators: [Validation.match('password', 'confirmPassword')]
      // }
    );
  }

  // get form(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else{
      console.log(JSON.stringify(this.form.value));
    }
    
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
