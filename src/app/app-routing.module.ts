import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './heroe-detail/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/heroes', pathMatch: 'full'
  },
  {
    path: 'heroes', component: HeroesComponent
  },
  {
    path: 'detail/:id', component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
