import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateDataComponent } from './update-data/update-data.component'



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    UpdateDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
