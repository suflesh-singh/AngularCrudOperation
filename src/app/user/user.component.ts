import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service'; 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  mydata:any;
  constructor(private user:UserService) { 
     
  }

  allData()
  {
    this.user.UsersData().subscribe((data)=>{
      console.log(data);
      this.mydata=data;
      this.user.saveUserDetail;
      
     })
  }

  ngOnInit(): void {
    this.allData()
  }
delete(id:number)
{
    console.log(id);
    this.user.deleteData(id).subscribe((response)=>{
    console.log(response);
  
    if(response)
    {
      alert('User Deleted Successfully');
      this.allData();
    }
    else{
      alert('Something Went Wrong');
    }
    
    })
     
    
}



}
