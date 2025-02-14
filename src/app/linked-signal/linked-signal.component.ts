import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
})
export class LinkedSignalComponent {
  quantitySignal = signal(1); // writable signal
  price = 10; // normal variable
  // // computed signal

  // total = computed(() => {
  //   return this.quantitySignal() * this.price;
  // });


  // // computed signals are read only, we cannot directly set the value to it in comparison to the writable signals, to overcome this restriction we can use linkedSignals which is available in two forms linked signal with shortHand syntax and linked signal with source & computation

  // // lets excute same with linked signals

  // // linked signal with shorthand syntax

  // total = linkedSignal(() => {
  //   return this.quantitySignal() * this.price;
  // });

  // // linked signal with source & computation
  // // linked signal requires an object with three properties source, computation and an optional equal property
  // // the source property identifies the dependency signal inorder to track the linked signal
  // // equal property (its an optional) is used to specify the custom quality function for comparing values.

  total = linkedSignal({
    source: this.quantitySignal,
    computation: () => this.quantitySignal() * this.price,
    // equal: (a: any, b:any) => a === b,
  })

  calculate(){
    this.quantitySignal.set(5);
  }
}
