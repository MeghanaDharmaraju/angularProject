import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { NgforVsForComponent } from './ngfor-vs-for/ngfor-vs-for.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // DataBindingComponent, 
    // DirectiveComponent,
    // StructuralDirectiveNgifVsIfComponent,
    NgforVsForComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Anular-19-tutorial';
}
