import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Userlogin } from 'src/app/interfaces/userlogin';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router
  ) {}

 // login(user: Userlogin){
  login(email: string,pass: string){
    //if (user.email !== '' && user.password !== '' ) { // {3}
      if (email !== '' && pass !== '' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
