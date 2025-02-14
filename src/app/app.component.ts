import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { NgforVsForComponent } from './ngfor-vs-for/ngfor-vs-for.component';
import { NgswitchVsSwitchComponent } from './ngswitch-vs-switch/ngswitch-vs-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { SignalsComponent } from './signals/signals.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // DataBindingComponent, 
    // DirectiveComponent,
    // StructuralDirectiveNgifVsIfComponent,
    // NgforVsForComponent,
    // NgswitchVsSwitchComponent,
    // AttributeDirectivesComponent,
    // SignalsComponent,
    LinkedSignalComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Anular-19-tutorial';
}
