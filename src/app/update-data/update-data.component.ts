import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {
  editData=new FormGroup({
    name:new FormControl(''),
    username:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })
  constructor(private user:UserService,private route:ActivatedRoute) { }
  
     
  ngOnInit(): void {
    this.user.getCurrentData(this.route.snapshot.params['id']).subscribe((response)=>{
      console.log(response);
    //   this.editData=new FormGroup({
    //     name:new FormControl(response[]),
    //     username:new FormControl(''),
    //     email:new FormControl(''),
    //     address:new FormControl('')
    //   })
    })
  }
allRecord()
{

}
}
