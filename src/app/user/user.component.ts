import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  constructor(private router: Router) {}

  loginData() {

    // // user verification logic  and after that we will use router naviagte method
    // // by using navigateUrl method

    // this.router.navigateByUrl('structural-directive');

    // // by using navigate method

    this.router.navigate(['structural-directive']);
  }
}
