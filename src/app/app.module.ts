import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './pages/parent/front/front.component';
import { TopnavComponent } from './pages/components/topnav/topnav.component';
import { WelcomeComponent } from './pages/parent/welcome/welcome.component';
import { MovieSelectionComponent } from './pages/components/movie-selection/movie-selection.component';
import { CinemaComponent } from './pages/components/cinema/cinema.component';
import { RestaurantComponent } from './pages/components/restaurant/restaurant.component';
import { CheckoutComponent } from './pages/components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TopnavComponent,
    WelcomeComponent,
    MovieSelectionComponent,
    CinemaComponent,
    RestaurantComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
