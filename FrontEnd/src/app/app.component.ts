import { Component } from '@angular/core';
//import { NgbDropdownConfig, NgbDropdownModule,NgbNavConfig,NgbNavModule,NgbProgressbarModule  } from '@ng-bootstrap/ng-bootstrap';
import { faHome,faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Event, NavigationCancel,NavigationEnd,NavigationError,NavigationStart, Router } from '@angular/router';

import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'LojasWEB';
  faHome=faHome;
  faSpinner=faSpinner;
  showLoad = true;


  /**
   *
   *
   */


    constructor(private router:Router ){
        this.router.events.subscribe((event:Event)=>{
          this.navigationInterceptor(event);
        });

        let now = moment(); // add this 2 of 4
        console.log('hello world', now.format()); // add this 3 of 4
        console.log(now.add(7, 'days').format());
    }



    private navigationInterceptor(event:Event): void{


      if(event instanceof NavigationStart){
        this.showLoad=true;
      }

      if(event instanceof NavigationEnd){
        this.showLoad=false;
      }

      if(event instanceof NavigationCancel){
        this.showLoad=false;
      }

      if(event instanceof NavigationError){
      }

    }

}




