import { Component, OnInit, Input, OnChanges, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements AfterViewInit, OnDestroy {

  @Input() restaurants: Restaurant[];
  @Input() selectedRestaurant:Restaurant;

  animateClass:string = "show"; // Slideout drawer animation for detail-view component
  listViewDisplayControlClass: string; // show/hide listview component when mobile view is activated
  detailViewDisplayControlClass: string; // show/hide detailview component when mobile view is activated

  singleColumnView:boolean = false; // mobile view is on or not???
  MOBILE_DEVICE_WIDTH:number = 480;


  constructor(private restaurantService:RestaurantService) {
    this.singleColumnView = window.innerWidth <= this.MOBILE_DEVICE_WIDTH; // onload mobile view on
  }

  ngAfterViewInit() {
    //listener to react when restaurant is selected
    this.restaurantService.restaurantSelected.subscribe((restaurant)=>{
      this.restaurantSelected(restaurant);
    });

    //listener to react for the navclicked
    this.restaurantService.navClicked.subscribe(()=>{
      this.onNavClick();
    });
  }
  /**
   * @description - utility method with HostListener decorator, it binds the resize event to the method
   * @param event - window object
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //Detect mobile view on or not
      this.singleColumnView = window.innerWidth <= this.MOBILE_DEVICE_WIDTH;
  }

  /**
   * @description : When restaurant is selected, this is method is called
   * @param restaurant : Restaurant object
   * > When mobile view is on, switches to single view handling
   * > single view enables show/hide listview and detailview components
   * 
   * > When mobile view is off, switches to two column view
   * > two column view shows both listview and detailview components at the same time
   * > slideout drawer animation applied
   * 
   */
  restaurantSelected(restaurant:Restaurant){
    //Selected restaurant object
    this.selectedRestaurant = restaurant;

    // when mobile view is on show map view and start showing 'Nav' on the header. 
    // Nav link helps to go back to list view again.
    if(this.singleColumnView) { 

      this.restaurantService.showNav.emit(); //show navigation link on the header
      this.showMapView(); // Mapview is on

    } else { // tablet / desktop view

      this.animateClass = ""; // remove animation class to rest the component to hide status
      setTimeout(()=>{
        this.animateClass = "show"; //add class show to apply the slide out animation
      },1000);

    }
  }

  //On navigation link click, hide map view 
  onNavClick() {
    this.hideMapView();
  }

  //show mapview by hiding listview component
  showMapView() {
    this.listViewDisplayControlClass = "hide";
    this.detailViewDisplayControlClass = "";
  }

  //hide mapview by hiding mapview component
  hideMapView() {
    this.listViewDisplayControlClass = "";
    this.detailViewDisplayControlClass = "hide";
  }

  //unsubscribe events at the end of the component lifecycle
  ngOnDestroy(){
    this.restaurantService.restaurantSelected.unsubscribe();
    this.restaurantService.navClicked.unsubscribe();
  }

}
