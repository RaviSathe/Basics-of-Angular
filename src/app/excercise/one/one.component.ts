import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

  users:any = []
  admins:any = []

  onUserRemove(i:any){
    this.users.splice(i,1)
  }

  onAdminRemove(i:any){
    this.admins.splice(i,1)
  }

  pushUser(data:any){
    this.users.push(data)
    console.log(this.users);
  }

  pushAdmin(event:any){
    this.admins.push(event)
  }

}
