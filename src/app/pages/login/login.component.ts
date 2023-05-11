import { Component } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  id:any
   
  constructor(private fb: FormBuilder, private srv: TodoService, private router:Router, private ar:ActivatedRoute) {
    
  }
  
  loginForm = this.fb.group({
    title:["", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
    //email:["", Validators.compose([Validators.required])],
    completed:["",  Validators.compose([Validators.required])],
    target:["", Validators.compose([Validators.required])],
    createdAt: moment().format("DD-MM-YYYY HH:mm:SS"),
    //createdAt: `${(new Date()).getDate()}-${(new Date()).getMonth()}-${(new Date()).getFullYear()} ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`,
    // updatedAt: `${(new Date()).getDate()}-${(new Date()).getMonth()}-${(new Date()).getFullYear()} ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`
    updatedAt: moment().format("DD-MM-YYYY HH:mm:SS")
  })
  ngOnInit(): void {
    this.ar.params.subscribe((params:any)=>{
      //console.log(params)
      if(params.id) {
         this.id = params.id;
        this.getTodo();
      }
    })
  }

  onSubmit(event:any) {
    event.preventDefault();
        //console.log("submitted")
    if(this.loginForm.invalid){
      return 
    }
    console.log(this.loginForm.value)
    let newTodo = this.loginForm.value
    let newTarget =newTodo.target
    
    let value = moment(newTarget).format("DD-MM-YYYY")
    //console.log(moment(newTarget).format("DD-MM-YYYY HH:mm:SS"))
    let newTodoValue = {...this.loginForm.value, target:value}

   if(this.id){
      this.srv.update(this.loginForm.value, this.id).subscribe({
        next:(res:any)=>{
          //console.log("ok")
          this.router.navigateByUrl("/")
        },
        error:(err:any)=>{
          console.log(err)
        },
        complete:()=>{
          console.log("sucess or error")
        }
      })
      return
    }



    this.srv.create(newTodoValue).subscribe({
      next:(res) => {
        this.router.navigateByUrl("/")
      },
      error:(err) => {
        console.log(err)
      },
      complete:() => {
        console.log("sucess or error")
      }
    })
  }
   getTodo() {
    this.srv.get(this.id).subscribe({
      next:(res) => {
        console.log(res)
        this.loginForm.patchValue(res)
      }
    })
  }
  
  
}

