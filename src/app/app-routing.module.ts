import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/parent/welcome/welcome.component';
import { FrontComponent } from './pages/parent/front/front.component';
import { TopnavComponent } from './pages/components/topnav/topnav.component';


const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'order', component: FrontComponent},
  {path:'top', component: TopnavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
