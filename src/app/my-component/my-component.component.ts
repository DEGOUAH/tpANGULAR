import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

selectedPokeId : string = "";
id : string = '';
searchPokeName: string = '';
pokes : Pokemon[] = [];
  constructor() { }

  ngOnInit(): void {
  this.pokes.push(new Pokemon('1', 'pikatchu'))
  this.pokes.push(new Pokemon('2', 'bulbasour'))
  this.pokes.push(new Pokemon('3', 'ivasour'))
  this.pokes.push(new Pokemon('4', 'carnivor'))
  this.pokes.push(new Pokemon('5', 'charmandar'))

  }
}
