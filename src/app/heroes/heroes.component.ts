import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = ""
  constructor() { 
    console.log("Inside HeroesComponent Constructor ")
    this.hero = "Shivani "
    
  }

  ngOnInit(): void {
    console.log("Inside On Init method of HeroesComponent")
  }

}
