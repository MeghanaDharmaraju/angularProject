import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
//  1
  textColor: string = 'text-success';
  changeColor(color: string){
    this.textColor = color;
  }
// 2
  isTextGreen: boolean = false;
// 3
  userClass: string = '';


  // using ngStyle
  // 1
  styleColor: string = 'orange';
  updateColor(ngStyleColor: string) {
    this.styleColor = ngStyleColor;
  }

  // 2
  isTextOrange: boolean = false;

  // 3
  customClass: any ={
    'color':'pink',
    'height':'auto',
    'width':'400px',
    'border':'2px solid black',
    'padding':'10px'
  }
}
