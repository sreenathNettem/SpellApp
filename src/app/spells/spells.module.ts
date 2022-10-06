import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellsRoutingModule } from './spells-routing.module';
import { SpellsComponent } from '../spells/spells.component';
import { SpellsListComponent } from './spells-list/spells-list.component';
import { ViewSpellComponent } from './view-spell/view-spell.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    SpellsComponent,
    SpellsListComponent,
    ViewSpellComponent
  ],
  imports: [
    NgxPaginationModule,
    HttpClientModule,
    CommonModule,
    SpellsRoutingModule
  ],exports:[
    SpellsListComponent,
    ViewSpellComponent
  ]
})
export class SpellsModule { }
