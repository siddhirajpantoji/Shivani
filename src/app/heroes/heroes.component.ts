import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';
import {Hero} from '../hero'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros = HEROES;
  selectedHero?: Hero;
  constructor() {
    console.log("Inside HeroesComponent Constructor ")

  }


  ngOnInit(): void {
    console.log("Inside On Init method of HeroesComponent")
  }

 
  onSelect(hero: Hero): void {
    console.log("hero Selected "+hero)
    this.selectedHero = hero;
  }
}
