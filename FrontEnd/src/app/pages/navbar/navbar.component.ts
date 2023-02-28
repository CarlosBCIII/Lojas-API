import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  imgCacau1: string;

  constructor(){
  this.imgCacau1 = '../assets/imagens/cs.jpeg';
  }
}
