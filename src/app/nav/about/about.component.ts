import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

  

  userValue:string = ''

  onSubmit(val:any){
    this.userValue = val.value
  }

}
