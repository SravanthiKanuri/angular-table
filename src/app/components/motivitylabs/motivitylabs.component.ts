import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-motivitylabs',
  templateUrl: './motivitylabs.component.html',
  styleUrls: ['./motivitylabs.component.scss']
})
export class MotivitylabsComponent {
  business: any = {
    companyName: "motivity",
    tagline: "Innovation as service",
    name: "Amrith raj Nalam",
    designation: "Software Engineer",
    phoneNumber: 9012345678,
    email: "amrithraj@motivitylabs.com"
  }
  constructor(private fb: FormBuilder) {}
  
  businessForm = this.fb.group({
    companyName:["", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
    tagline:["", Validators.compose([Validators.required])],
    name:["", Validators.compose([Validators.required])],
    phoneNumber:["", Validators.compose([Validators.required])],
    designation:["", Validators.compose([Validators.required])],
    email:["", Validators.compose([Validators.required])],
    
  })
  onDownload(){
    window.print()
  }
}
