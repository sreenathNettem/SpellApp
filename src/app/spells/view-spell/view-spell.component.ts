import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-view-spell',
  templateUrl: './view-spell.component.html',
  styleUrls: ['./view-spell.component.css']
})
export class ViewSpellComponent implements OnInit {
  spellDetails: any;

  constructor(private httpService: HttpService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    const spellId:any = this.route.snapshot.paramMap.get('id');
    this.getSpellDetailsbySpellId(spellId)

  }

  getSpellDetailsbySpellId(spellId: string){
    this.httpService.getSpellDetailsBySpellId(spellId).subscribe(spellDetails=>{
      console.log(spellDetails);
      this.spellDetails = spellDetails;
    })

    }

  

}
