import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros: Hero[] = [];
  selectedHero?: Hero;
  constructor(private heroService: HeroService) {
    console.log("Inside HeroesComponent Constructor ")

  }


  ngOnInit(): void {
    console.log("Inside On Init method of HeroesComponent")
    this.getHeroes()
  }


  onSelect(hero: Hero): void {
    console.log("hero Selected " + hero)
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // arrayOfheros is returned from get heros method . Just way of using variable has been changed from 
     this.heros = this.heroService.getHeroes();
    // To an arrow function inside Subscribe method 
    //this.heroService.getHeroes().subscribe(arrayOfheros => { this.heros = arrayOfheros });
  }
}
