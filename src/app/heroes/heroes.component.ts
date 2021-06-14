import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  // selectedHero?: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected Hero ID: ${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroesList => (this.heroes = heroesList));
  }
}
