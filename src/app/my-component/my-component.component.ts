import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service'; 
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService ]
})
export class MyComponentComponent implements OnInit {

selectedPokeId : string = "";
id : string = '';
searchPokeName: string = '';
pokes : Pokemon[] = [];
  constructor(private pokeService : PokeAPIServiceService) { }

  ngOnInit(): void {
  this.pokeService.getPokemons().subscribe((data) => {
    data.results.forEach((e:any, index:any) => {
      this.pokes.push(new Pokemon(index, e.name, e.url))
    });
  }
  );
  }

  go(){
    console.log(this.selectedPokeId);
  }
}
