import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { RestaurantDetailViewComponent } from './restaurant/components/restaurant-detail-view/restaurant-detail-view.component';
import { RestaurantListComponent } from './restaurant/components/restaurant-list/restaurant-list.component';
import { RestaurantCardComponent } from './restaurant/components/restaurant-card/restaurant-card.component';
import { GlobalHeaderComponent } from './restaurant/components/global-header/global-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantDetailViewComponent,
    RestaurantListComponent,
    RestaurantCardComponent,
    GlobalHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey:"AIzaSyC2xl3zUmRc5GsAQdsmTZCJt71QS0GRLCA"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
