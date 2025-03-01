import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor(private http: HttpClient) {}

  userData = {
    id: 1,
    name: 'John',
    username: 'john',
    email: 'john@gmail.com',
    subscription: 'basic',
  };

  isEligibleForSubs() {
    if (
      this.userData.subscription == 'basic' &&
      this.userData.email.endsWith('@gmail.com')
    ) {
      return true;
    } else {
      return false;
    }
  }

  getAllUsers() {
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
