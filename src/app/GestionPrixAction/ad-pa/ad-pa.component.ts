import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrixAction } from 'src/app/Models/prix-action';
import { PrixActionService } from 'src/app/Services/prix-action.service';

@Component({
  selector: 'app-ad-pa',
  templateUrl: './ad-pa.component.html',
  styleUrls: ['./ad-pa.component.css']
})
export class AdPaComponent implements OnInit {
  id:number;
  nom:String;
  listPrixAction: PrixAction[];

  
  prixAction = new PrixAction();
  valeur:any;


  constructor(private prixActionService: PrixActionService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.nom = params['name'];
    })
    this.getPrixAction();
  }

  addValeur(){
    console.log(this.valeur);
    this.prixAction.prixAct = this.valeur;
    this.prixActionService.addPrixAction(this.id,this.prixAction).subscribe(
      res => {
        console.log('Valeur Modifier');
        this.prixAction = res;
        this.getPrixAction();
      });
      err => {
        console.log(err);
      }
      setTimeout( ()=>{
        this.router.navigate(['prixAction/'+this.id+'/'+this.nom]);
        },  100)
  }


  setvaleur(value): void {
    this.valeur=(value.target as HTMLInputElement).value;
    console.log(this.valeur)
  }

  getPrixAction(){
    this.prixActionService.getPrixAction(this.id).subscribe(
      res => {
        console.log('PrixActions :');
        this.listPrixAction = res;
        console.log(this.listPrixAction);
      });
    err => {
      console.log(err);
    }  
  }


}

