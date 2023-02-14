import { Component } from '@angular/core';
import { NgbDropdownConfig, NgbDropdownModule,NgbNavConfig,NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Front-Angular';
  faHome=faHome;

}

