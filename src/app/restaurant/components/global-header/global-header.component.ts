import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {

  showNav:boolean=false; //Boolean to control show/hide navigation

  constructor(private restaurantService:RestaurantService) {}

  ngOnInit() {
    //Event listener to show the Nav link.
    this.restaurantService.showNav.subscribe(()=>{
      this.showNav = true;
    })

    //Event listener to hide the Nav link.
    this.restaurantService.hideNav.subscribe(()=>{
      this.showNav = false;
    })
  }

  /**
   *  method to emit 'navClicked' event.
   *  This event is listened by the restaurant list container component to show hide list-view / map-view
   */
  navClicked() {
    this.restaurantService.navClicked.emit();
    this.showNav = false;
  }

  /**
   * Component's life cycle ends
   * unsubscribe events.
   */
  ngOnDestroy(){
    this.restaurantService.showNav.unsubscribe();
    this.restaurantService.hideNav.unsubscribe();
  }

}
