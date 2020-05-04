import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/parent/welcome/welcome.component';
import { FrontComponent } from './pages/parent/front/front.component';
import { TopnavComponent } from './pages/components/topnav/topnav.component';
import { CinemaComponent } from './pages/components/cinema/cinema.component';
import { ControllOrderComponent } from './pages/components/controll-order/controll-order.component';
import { RestaurantComponent } from './pages/components/restaurant/restaurant.component';
import { CheckoutComponent } from './pages/components/checkout/checkout.component';
import { PartyroomComponent } from './pages/parent/partyroom/partyroom.component';


const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'order', component: FrontComponent},
  {path:'top', component: TopnavComponent},
  {path:'seat', component: CinemaComponent},
  {path:'con', component: ControllOrderComponent},
  {path:'restu',component: RestaurantComponent},
  {path:'check',component: CheckoutComponent},
  {path:'restaurant', component: PartyroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
