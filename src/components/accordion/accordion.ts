import { expand } from 'rxjs/operator/expand';
import { Component, ViewChild, OnInit } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit{
  expanded = false 
  @ViewChild("cc") cardContent:any
  constructor() {
    
  }

  ngOnInit(){
    debugger
    console.log(this.cardContent.nativeElement);    
  }
  
  toggleAccordion(){

  }

}
