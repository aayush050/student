import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';;
import { StudentService } from './student.service';
import { AddComponent } from './add/add.component';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { StulistComponent } from './stulist/stulist.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { EditingComponent } from './editing/editing.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    PageNotFoundComponent,
    AddComponent,
    ButtonComponent,
    StulistComponent,
    EditstudentComponent,
    EditingComponent
  
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     FormsModule,
     CommonModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
