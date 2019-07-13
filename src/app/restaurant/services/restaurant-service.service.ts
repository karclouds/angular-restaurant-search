import { Injectable, EventEmitter } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  //Mock JSON API url
  private RESTAURANTS_GET_API_URL: string = "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json";
  restaurants:Restaurant[];

  /**
   * Events used in this app
   */
  public showNav = new EventEmitter();  // When the Nav link should show?
  public hideNav = new EventEmitter(); // When the Nav link should hide?
  public navClicked = new EventEmitter(); // When Nav link is clicked?
  public restaurantSelected = new EventEmitter(); // When the restaurant card is selected

  
  constructor(private http:HttpClient) { }

  /**
   * Observable method to invoke API call and get the response.
   * The response is bound directly to the restaurant model
   */
  getAllRestaurants () : Observable<Restaurant[]>{
    return this.http.get(this.RESTAURANTS_GET_API_URL)
      .pipe( map((data:any) =>  { 
              this.restaurants=data.restaurants;
              return this.restaurants; 
            }
      ));
  }

}
