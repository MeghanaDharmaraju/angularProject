import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  // userData = {
  //   id:1,
  //   name: 'John',
  //   username: 'john',
  //   email: 'john@gmail.com'
  // }

  dummyData: any;
  isEligible: boolean = false;
  userList: any;
  constructor(private shareData: SharedDataService) {
    this.dummyData = this.shareData.userData;
    this.isEligible = this.shareData.isEligibleForSubs();
    this.getUsersData();
  }

  getUsersData() {
    this.shareData.getAllUsers().subscribe((res:any)=> {
      debugger
      this.userList = res;
    })
  }

}
