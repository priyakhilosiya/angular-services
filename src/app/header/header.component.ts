import { Component } from '@angular/core';
import { subscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [subscribeService] // Provide the service at the component level
})
export class HeaderComponent {

  constructor(private subService : subscribeService){

  }
  tab: string = 'home';
  onSubscribe() {
    this.subService.subscribe('Header');
  }

}
