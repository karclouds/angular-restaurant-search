import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurant-detail-view',
  templateUrl: './restaurant-detail-view.component.html',
  styleUrls: ['./restaurant-detail-view.component.css']
})
export class RestaurantDetailViewComponent {

  @Input() selectedRestaurant:Restaurant; // input restaurant object passed by the list container component

  constructor() { }

  /**
   * Utility method to concatenate the address to single line with <br> tag.
   * <br> tag is used to nind the content into html
   */
  getThisRestaurantAddress():string {
    return this.selectedRestaurant.location.formattedAddress.join("<br/>");
  }

}
