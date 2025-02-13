import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // DataBindingComponent, 
    // DirectiveComponent,
    StructuralDirectiveNgifVsIfComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Anular-19-tutorial';
}
