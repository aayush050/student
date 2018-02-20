import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { ButtonComponent } from './button/button.component';
import { StulistComponent } from './stulist/stulist.component';

const routes: Routes =[
    { path: '',redirectTo: 'test',pathMatch: 'full'},
    {path: 'login',component: LoginComponent},
    {path: 'test', component: TestComponent},
    {path: 'add', component: AddComponent},
    {path: 'stulist',component: LoginComponent},
    { path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [LoginComponent,PageNotFoundComponent,AddComponent,StulistComponent,ButtonComponent]

