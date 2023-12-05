import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HostListener} from '@angular/core';
import { Comp2Component } from '../subject-behaviour/comp2/comp2.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit{

  constructor(private renderer: Renderer2){}  

  @ViewChild('box') box!:ElementRef;
  @ViewChild(Comp2Component) comp2:Comp2Component | undefined;

  @HostListener('click') myClick(){
    alert("Clicked")
  }

  ngOnInit(): void {
    console.log(this.box);
    // this.comp2?.update().s
    
  }
  ngAfterViewInit(): void {
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor="red";
    // this.box.nativeElement.style.color="white";
    this.renderer.setStyle(this.box.nativeElement,'backgroundColor','red')
    this.renderer.setAttribute(this.box.nativeElement,'name','bhai')
    this.renderer.addClass(this.box.nativeElement,'list')
  }


  userName:string = 'Hello'

  callChildMethod(){
    this.comp2!.update(this.userName)
  }

  changeChildProperty(){
    this.comp2!.userName = 'Hey'
  }
}



