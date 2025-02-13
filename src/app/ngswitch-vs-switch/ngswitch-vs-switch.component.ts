import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch-vs-switch',
  imports: [CommonModule],
  templateUrl: './ngswitch-vs-switch.component.html',
  styleUrl: './ngswitch-vs-switch.component.css'
})
export class NgswitchVsSwitchComponent {
  grade: number = 0;

  set(x: number) {
    this.grade = x;
  }
}
