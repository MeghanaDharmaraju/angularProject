import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule, CustomPipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css',
})
export class BuiltInPipesComponent {
  angularPipes: string = 'use pipes to format data in angular templates';
  personData = {
    name: 'John',
    age: 30,
    city: 'Bangalore',
  };

  currentDate : Date = new Date();

  items = of(['Apple', 'Banana', 'Mango']);

  // for custom pipes

  // mobileNumber: any = 9856415423;

  // if we receive mobileNumber form backend as undefined, or an empty string, or null
  mobileNumber: any =  null;

}
