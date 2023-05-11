import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import { CmponentInteractionService } from 'src/app/shared/cmponent-interaction.service';
import { MatDialog } from '@angular/material/dialog';
import { ModelComponent } from 'src/app/components/model/model.component';
//import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
  
})
export class HomeComponent implements OnInit {
  todos:any = [];
  todoLength:any = 0;
  fileName= 'ExcelSheet.xlsx';
 
  constructor(private srv: TodoService, private router:Router, 
    private ar:ActivatedRoute, 
    private cis:CmponentInteractionService, 
    private dialog: MatDialog){}
    //private eas: ExportAsService)  {}

    exportexcel(): void
    {
      /* pass here the table id */
      let element = document.getElementById('myTable');
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      /* save to file */  
      XLSX.writeFile(wb, this.fileName);
   
    }
    print(){
      window.print();
    }
   


  displayedColumns:any = ['id', 'title', 'completed', 'createdAt', 'target', 'updatedAt', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  
  @ViewChild(MatSort)mysort:any;
 
 
  ngAfterViewInit() {
    this.todos.paginator = this.paginator;
    
  }
  ngOnInit(): void {
    this.getAllTodos()
   
   }

  
   getAllTodos() {
    this.srv.all().subscribe({
      next: (res:any)=>{
       // console.log(res)
        this.todos = res;
        this.todoLength = (this.todos.length);
        this.cis.announceProduct(this.todoLength)
        //console.log(this.todoLength)
        this.todos = new MatTableDataSource(res) 
        this.todos.paginator = this.paginator;
        this.todos.sort = this.mysort;
        
    
      },
      error: (err)=>{
        console.log(err)
      }
    })
   }

   


   onEditClicked(id:any) {
    this.router.navigateByUrl("/login/"+id)
    console.log(id)
  }
  
   

  applyFilter(event:any){
    const filterVal = (event.target as HTMLInputElement).value;
    this.todos.filter = filterVal.trim().toLocaleLowerCase();
    if (this.todos.paginator) {
      this.todos.paginator.firstPage()
    }
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id:any): void {
    this.dialog.open(ModelComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    
      data: {
        message:"Are you sure you want to delete?",
        id:id
        
      }
      
      
    });
   
  }
  

}
  


