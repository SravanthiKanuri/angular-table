import { identifierName } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
 //import {MatDialog} from '@angular/material/dialog';
 import { MatDialogRef } from '@angular/material/dialog';
 import { MAT_DIALOG_DATA } from '@angular/material/dialog';
 import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  todos:any;
  
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data:any, private srv:TodoService ) {}
  getAllTodos() {
    this.srv.all().subscribe({
      next: (res:any)=>{
       // console.log(res)
        this.todos = res;
         
      },
      error: (err)=>{
        console.log(err)
      }
    })
   }
  onDeleteClicked(){
    console.log(this.data)
    this.srv.delete(this.todos, this.data.id).subscribe({
      next:(res)=>{
        console.log(res)
        window.location.reload()
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("todos")
      }
    })
  }
}
