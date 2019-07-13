import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant/services/restaurant-service.service';
import { Restaurant } from './restaurant/models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  restaurants:Restaurant[];
  selectedRestaurant: Restaurant;
  
  constructor(private restaurantService:RestaurantService){}

  ngOnInit(){
      //Load all the restaurant details from the service 
      this.restaurantService.getAllRestaurants().subscribe(restaurants=>{
          this.restaurants = restaurants;
          //Selected restaurant is defaulted to the first object from the array.
          this.selectedRestaurant= this.restaurants[0];
      }, error=>{
        //Todo: error handling with message in the UI
        console.error(error);
      });
  }

}
