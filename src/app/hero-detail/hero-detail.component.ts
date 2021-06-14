import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHeroID();
  }

  getHeroID() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(h => (this.hero = h));
  }
  goBack(): void {
    this.location.back();
  }
}
