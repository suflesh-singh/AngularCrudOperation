import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Model/user.model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private save:UserService,private route:ActivatedRoute,private router:Router) { 
   
  }
  user:User=new User();
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.getCurrentData();
  }
  addUser=new FormGroup({
    name: new FormControl(''),
    username:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })
   
   updateData:boolean=false;
  saveData(data:any)
  {
    if(!this.updateData)
       {
        this.save.saveUserDetail(data).subscribe((response)=>{
          alert('User Added Successfully...')
          this.addUser.reset();
          this.saveData;
          this.updateData=true;
        })
       
       }
       else
       {
        this.save.editData(this.route.snapshot.params['id'],data).subscribe((result)=>{
          console.log(result);
          alert('Record Updated Successfully');
          this.router.navigate(['/'])
         })
       }
   
      
  }

getCurrentData()
{
  this.save.getCurrentData(this.route.snapshot.params['id']).subscribe((res)=>{
   console.log(res);
   this.updateData=true;
   this.user=res;
  })
}
 
}
