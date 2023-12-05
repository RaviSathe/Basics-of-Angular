import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el:ElementRef , private renderer:Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
  }

  @HostBinding('style.backgroundColor') bgColor: any;
  @HostBinding('class.ola') cls:any
  @HostListener('click') myClick(){
    // alert("Working")
    this.bgColor = 'red'
    this.cls = true
  }

  @HostListener('mouseover') mouseOver(){
    // alert("mouseover")
    this.bgColor = 'lightgrey'
  }

  @HostListener('mouseout') mouseout(){
    // alert("mouseout")
    this.bgColor = 'white'
  }

}
