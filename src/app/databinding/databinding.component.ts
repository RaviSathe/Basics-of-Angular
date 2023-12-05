import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  name = 'Ravi'

  myMethod(){
    return "Hello Everybody "+ this.name
  }

  status:boolean = false

  number = 1234
}
