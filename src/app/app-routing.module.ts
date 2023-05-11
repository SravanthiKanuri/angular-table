import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
//import { CardComponent } from './components/card/card.component';
import { MotivitylabsComponent } from './components/motivitylabs/motivitylabs.component';
import { FormPageComponent } from './components/form-page/form-page.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'todo',
    component: TodoComponent
  },
  {
    path:'card',
    component: MotivitylabsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'formPage',
    component: FormPageComponent
  },
  {
    path:'login/:id',
    component: LoginComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
