import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { Writable } from 'stream';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {
  normalCounter = 0;
  counter = signal(0);
  // counter: WritableSignal<number> = signal(0); // same as above

  // counter1 = signal({});
  // counter2 = signal([]);

  constructor() {
    this.counter.set(5);

    setTimeout(() => {
      this.normalCounter = 50;
      this.counter.set(30);
      console.log('Normal Counter Value => ' + this.normalCounter);
      console.log('Counter Value with signals => ' + this.counter);

    }, 2000);
  }

  onIncrement() {
    this.counter.update((initialValue) => initialValue + 1);
  }
}
