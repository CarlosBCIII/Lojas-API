import { Component,OnInit } from '@angular/core';
//import { NgbDropdownConfig, NgbDropdownModule,NgbNavConfig,NgbNavModule,NgbProgressbarModule  } from '@ng-bootstrap/ng-bootstrap';
import { faHome,faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Event, NavigationCancel,NavigationEnd,NavigationError,NavigationStart, Router } from '@angular/router';

import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'LojasWEB';
  faHome = faHome;
  faSpinner = faSpinner;
  showLoad = true;
  div1 = false;
  div2 = false;
  div3 = false;
  div4 = false;
  div5 = false;

  imgCacau1: string;
  /**
   *
   *
   */

  constructor(private router: Router) {
    this.imgCacau1 = '../assets/imagens/cs.jpeg';

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });

    let now = moment(); // add this 2 of 4
    console.log('hello world', now.format()); // add this 3 of 4
    console.log(now.add(7, 'days').format());
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.showLoad = true;
    }

    if (event instanceof NavigationEnd) {
      this.showLoad = false;
    }

    if (event instanceof NavigationCancel) {
      this.showLoad = false;
    }

    if (event instanceof NavigationError) {
    }
  }

  muda1() {
    this.div1 = true;
    this.div2 = false;
    this.div3 = false;
    this.div4 = false;
    this.div5 = false;
  }

  muda2() {
    this.div1 = false;
    this.div2 = true;
    this.div3 = false;
    this.div4 = false;
    this.div5 = false;
  }

  muda3() {
    this.div1 = false;
    this.div2 = false;
    this.div3 = true;
    this.div4 = false;
    this.div5 = false;
  }

  muda4() {
    this.div1 = false;
    this.div2 = false;
    this.div3 = false;
    this.div4 = true;
    this.div5 = false;
  }

  muda5() {
    this.div1 = false;
    this.div2 = false;
    this.div3 = false;
    this.div4 = false;
    this.div5 = true;
  }

  ngOnInit() {}
}






