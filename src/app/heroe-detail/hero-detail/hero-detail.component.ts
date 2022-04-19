import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../hero';
import { HeroService } from 'src/app/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  heroes: Observable<Hero> | any;
  heroId: any;

  constructor(
    private heroService: HeroService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // let id = this.activateRoute.snapshot.params['id']
    // this.heroes = this.heroService.getHeroDetails(id);
    // console.log(id);

    this.heroId = this.activateRoute.snapshot.params['id'];
    this.getHeroes(this.heroId);
  }

  // Get hero details by id
  getHeroes(id: any): void {
    this.heroService.getHeroDetails(id).subscribe(hero => {
      this.heroes = hero;
      console.log(this.heroes, "heroes");
    });
  }

}
