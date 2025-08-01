import { Component } from '@angular/core';
import { subscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers: [subscribeService] // Provide the service at the component level
})
export class SidebarComponent {


  constructor(private subService : subscribeService){

  }
  onSubscribe() {
   this.subService.subscribe('Sidebar');
  }

}
