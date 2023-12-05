import { Component } from '@angular/core';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent {
  userss:any = []

  onSubmit(data:any){
    console.log(data.value);
    this.userss.push({
      name:data.value
    })
    data.value = ''
  }

  deleteuser(i:any){
    console.log(i);
    this.userss.splice(i,1)
  }


}
