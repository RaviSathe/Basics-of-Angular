import { Component } from '@angular/core';
import { MessageService } from 'src/app/appService/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(private ser:MessageService){}

  productSelected:boolean = false;
  item:any
  cart:boolean = false
  cartItem:any
  addedProduct:any

  onProductSelection(product:any){
    console.log(product);
    this.item = product
    this.productSelected = true
    this.ser.all()
  }

  

}
