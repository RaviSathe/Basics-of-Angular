import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GlobalService } from 'src/app/appService/global.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnChanges , DoCheck{

  // constructor(private _ser:GlobalService){
  //   this._ser.userName.subscribe(res =>{
  //     this.userName = res
  //   })
  // }

  constructor(){
    console.log("Constructor Called");
  }
  
  @Input() myValue:string = 'Hello'

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChnages called : " + "Current Value => "+changes['myValue'].currentValue+
    "\nPrevious value => "+changes['myValue'].previousValue);
  }

  ngOnInit(){
    console.log("ngOnInit called");
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
  }


  userName:string = 'hello'

  // updateName(name:any){
  //   this._ser.userName.next(name.value)
  // }



}
