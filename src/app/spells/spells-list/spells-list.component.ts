import { Component, OnInit } from '@angular/core';
import { SpellObj } from 'src/app/models/spell.modal';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.css']
})

export class SpellsListComponent implements OnInit {
  spells: any;
  config:any;
  config1:any;
  favSpells: SpellObj[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getSpellsList();
    this.config = {
      currentPage: 1,
      itemsPerPage: 6,
    };
    this.config1 = {
      currentPage: 1,
      itemsPerPage: 6,
    };
  }
  getSpellsList(){
    this.httpService.getSpellsList().subscribe(spells=>{
      this.spells = spells['results'];
      this.spells.forEach((spell:any) => {
        spell['isSelected'] = false;
        
      });
    })
  }
  toggleStatus(spell1:any){
    this.spells.forEach((spell:any) => {
      if(spell1 === spell){
        spell['isSelected'] = !spell['isSelected'];
      }
    });
    this.favSpells = this.spells.filter((spell: SpellObj)=>spell.isSelected === true)
  }
  pageChange(newPage: number) {
    this.config.currentPage = newPage;
  }
  favPageChange(newPage: number) {
    this.config1.currentPage = newPage;
  }
}
