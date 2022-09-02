import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'add-user',component:AddUserComponent},
  // {path:'editData/:id',component:UpdateDataComponent},
  {path:'add-user/:id',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
