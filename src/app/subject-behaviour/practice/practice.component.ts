import { Component } from '@angular/core';
import { GlobalService } from 'src/app/appService/global.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  constructor(private _ser:GlobalService){
    this._ser.userName.subscribe(res=>{
      this.userName = res
    })
  }

  userName:string = 'hello'

  updateName(name:any){
    this._ser.userName.next(name.value)
  }

}
