import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/Models/action';
import { PortefeuilleService } from 'src/app/Services/portefeuille.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css']
})
export class ListActionsComponent implements OnInit {
  listActions: Action[];

  actions : any;

  constructor(private portefeuilleService: PortefeuilleService,private router: Router) { }

  ngOnInit(): void {
    this.getActionsActPrix();
  }

  getActionsActPrix(){
    console.log('eeeee');
    this.portefeuilleService.getAllActions().subscribe(
      res => {
        console.log('Actions :');
        this.actions = res;
        console.log(this.actions);
      });
    err => {
      console.log(err);
    }
  }

  getPrixAct(id:any){
    this.portefeuilleService.getPrixAction(id).subscribe(
      res => {
        
        console.log(res);
      });
    err => {
      console.log(err);
    }
  }




}
