import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [
    // RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor(private router: Router) {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // used for components input property
    console.log('1.ngOnChanges called');
  }
  ngOnInit(): void {
    // used for API call
    console.log('2.ngOnInit called');
  }
  ngDoCheck(): void {
    // used for every change detection
    console.log('3.ngDoCheck called');
  }
  ngAfterContentInit(): void {
    // used for ng-content projection
    console.log('4.ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    // used for ngaftercontentinit called for check
    console.log('5.ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    // used for viewChild
    console.log('6.ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    // used for after ngafterviewinit called for check
    console.log('7.ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('8.ngOnDestroy called');
  }

  loginData() {
    // // user verification logic  and after that we will use router naviagte method
    // // by using navigateUrl method

    // this.router.navigateByUrl('structural-directive');

    // // by using navigate method

    this.router.navigate(['structural-directive']);
  }
}
