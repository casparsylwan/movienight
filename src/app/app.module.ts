import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DraggableModule } from './draggable/draggable.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './pages/parent/front/front.component';
import { TopnavComponent } from './pages/components/topnav/topnav.component';
import { WelcomeComponent } from './pages/parent/welcome/welcome.component';
import { MovieSelectionComponent } from './pages/components/movie-selection/movie-selection.component';
import { CinemaComponent } from './pages/components/cinema/cinema.component';
import { RestaurantComponent } from './pages/components/restaurant/restaurant.component';
import { CheckoutComponent } from './pages/components/checkout/checkout.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { ControllOrderComponent } from './pages/components/controll-order/controll-order.component';
import { PartyroomComponent } from './pages/parent/partyroom/partyroom.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TopnavComponent,
    WelcomeComponent,
    MovieSelectionComponent,
    CinemaComponent,
    RestaurantComponent,
    CheckoutComponent,
    FooterComponent,
    ControllOrderComponent,
    PartyroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    DraggableModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
