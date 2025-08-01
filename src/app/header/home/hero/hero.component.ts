import { Component } from '@angular/core';
import { subscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  providers: [subscribeService] // Provide the service at the component level
})

export class HeroComponent {

  constructor(private subService : subscribeService){

  }

  onSubscribe() {
   this.subService.subscribe('Hero');
  }

}
