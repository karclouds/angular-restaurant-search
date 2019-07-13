import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent {

  @Input() restaurant: Restaurant; // Input object passed by the list container component
 
  constructor(private restaurantService:RestaurantService) { }

  /**
   * Triggers when restaurant card is selected
   */
  selectRestaurant() {
    //this event is listened by restaurant list component to react.
    this.restaurantService.restaurantSelected.emit(this.restaurant);
  }

}
