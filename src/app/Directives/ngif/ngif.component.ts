import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {

  display:boolean = false

  data:string = 'Selected'

  selectedvalue:string = '';

  show(){
    this.display = true
  
  }

  select(event:any){
    console.log(event.target.value);
    this.selectedvalue = event.target.value
  }

  product = [
    {name:'Samsung', color:'black', price: 26000},
    {name:'Machine', color:'white', price: 12000},
    {name:'Mobile', color:'Grey', price: 10000},
    {name:'FM', color:'Choclate', price: 500}
  ]

}
