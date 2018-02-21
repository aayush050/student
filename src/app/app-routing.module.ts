import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { ButtonComponent } from './button/button.component';
import { StulistComponent } from './stulist/stulist.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { EditingComponent } from './editing/editing.component';


const routes: Routes =[
    { path: '',redirectTo: 'login',pathMatch: 'full'},
    {path: 'menu',component: LoginComponent},
    {path: 'login', component: TestComponent},
    {path: 'add', component: AddComponent},
    {path: 'studentlist',component: StulistComponent},
    {path: 'edit', component: EditstudentComponent},
    {path: "editing",component:EditingComponent},
    {path: "**", component: PageNotFoundComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [LoginComponent,PageNotFoundComponent,AddComponent,StulistComponent,ButtonComponent,EditstudentComponent,EditingComponent]

