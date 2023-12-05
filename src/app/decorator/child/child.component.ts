import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() placeHolderText:string = 'Child Works'

  @Input() productSelected:boolean = false;
  @Input() item:any
  
  @Input() cart:boolean = false
  @Input() cartItem:any
  @Output() addedProduct = new EventEmitter<any>


  addToCart(){
    if(this.item != undefined){
      this.cart = true
      this.cartItem = this.item
      this.addedProduct.emit(this.cart)
    }else{
      return
    }
  }

  // @Output

  userCount = 0
  adminCount = 0

  @Output() UserInputEvent = new EventEmitter<any>
  @Output() AdminInputEvent = new EventEmitter<any>

  createUser(user:any){
    if(user.value.length>0){
      this.UserInputEvent.emit(user.value)
      this.userCount++
      user.value = ''
    }
  }

  createAdmin(admin:any){
    if(admin.value.length>0){
      this.adminCount++
      this.AdminInputEvent.emit(admin.value)
      admin.value = ''
    }
  }

}
