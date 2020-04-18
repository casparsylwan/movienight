import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/parent/welcome/welcome.component';
import { FrontComponent } from './pages/parent/front/front.component';


const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'order', component: FrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
