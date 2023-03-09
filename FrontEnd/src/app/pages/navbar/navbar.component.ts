import { Observable } from 'rxjs';
import { OauthService } from './../oauth/oauth.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  imgCacau1: string;
  isLoggedIn$!: Observable<boolean>;

  constructor(private oauthService:OauthService){
      this.imgCacau1 = '../assets/imagens/cs.jpeg';
  }

  ngOnInit(): void {

    this.isLoggedIn$ = this.oauthService.isLoggedIn

  }

  onLogout(){
    this.oauthService.logout();                      // {3}
  }
}
