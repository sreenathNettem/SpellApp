import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellsListComponent } from './spells-list/spells-list.component';
import { ViewSpellComponent } from './view-spell/view-spell.component';

const routes: Routes = [
  {
  path:'',
  component:SpellsListComponent
}
,{
  path:'view-spell/:id',
  component:ViewSpellComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellsRoutingModule { }
