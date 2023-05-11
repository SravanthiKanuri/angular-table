import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ModelComponent } from './components/model/model.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ExportAsModule } from 'ngx-export-as';
import { CardComponent } from './components/card/card.component';
import { MotivitylabsComponent } from './components/motivitylabs/motivitylabs.component';
import { FormPageComponent } from './components/form-page/form-page.component';
//import {Validation } from './utils/validation';
//import { MatDialog } from '@angular/material/dialog';
import { validateNotEmpty } from 'validation-utils';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LoginComponent,
    ModelComponent,
    CardComponent,
    MotivitylabsComponent,
    FormPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ExportAsModule,
    //validateNotEmpty   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
