import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private router:Router){}

  productsArray = [
    {image:'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    name:'Laptop',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae!'},
    {image:'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg',
    name:'Mobile',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae!'},
    {image:'https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg',
    name:'TV',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae!'},
    {image:'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FzaGluZyUyMG1hY2hpbmVzfGVufDB8fDB8fHww',
    name:'Washing Machine',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae!'},
    {image:'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    name:'Washing Machine',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae!'},
    {image:'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    name:'Washing Machine',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae!'}

  ]

  data:any = [];

  knowMore(i:any){
    // this.data = []
    console.log(i);
    console.log(this.productsArray[i]);
    this.data.push(this.productsArray[i])
    if(this.data.length > 3){
      this.router.navigate(['data'])
    }
    // console.log(this.data.length);
    
  }

}
