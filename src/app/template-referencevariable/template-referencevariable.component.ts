import { Component } from '@angular/core';

@Component({
  selector: 'app-template-referencevariable',
  templateUrl: './template-referencevariable.component.html',
  styleUrls: ['./template-referencevariable.component.css']
})
export class TemplateReferencevariableComponent {

  onSubmit(local:any){
    console.log(local.value);
    console.log(local.name);
    console.log(local.placeholder);
  }

}
