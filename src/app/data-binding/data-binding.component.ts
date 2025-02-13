import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  name : string = 'FEDLearning';
  topic: string = 'Data Binding';
  image: string = "https://yt3.googleusercontent.com/vDRk9yJj6aeYBq_1fa66x-QayYqsW3XS6xG-yFVODBQyEFVY5YigauGG8ibCgALGoYvdvWek7hk=s160-c-k-c0x00ffffff-no-rj";

  onSave(){
    console.log("Button is clicked");
    alert('Data saved succesfully')
  }
  onChange(){
    alert('Country has changed');
  }

  random: string = '';
}
