import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Obligation } from 'src/app/Models/obligation';
import { ObligationService } from 'src/app/Services/obligation.service';

@Component({
  selector: 'app-add-obligation',
  templateUrl: './add-obligation.component.html',
  styleUrls: ['./add-obligation.component.css']
})
export class AddObligationComponent implements OnInit {

  obligation = new Obligation();
  
  nom:any;
  description: any;
  valeur_nom:any;
  taux_c : any ;
  taux_r : any ;
  nombreAnnee : any ;
  nombreObligation : any ;

  constructor(private obligationService: ObligationService, private router:Router) { }

  ngOnInit(): void {
  }

  addObligation(){
    this.obligation.id=0;
    this.obligation.nom=this.nom;
    this.obligation.description=this.description;
    this.obligation.valeur_nominale=this.valeur_nom;
    this.obligation.taux_c=this.taux_c;
    this.obligation.taux_r=this.taux_r;
    this.obligation.nombreAnnee=this.nombreAnnee;
    this.obligation.nombreObligation=this.nombreObligation;
    this.obligationService.addObligation(this.obligation).subscribe(
      res=>{
        console.log(this.obligation);
        this.obligation = res;
      });
      err => {
        console.log(err);
      }
      setTimeout( ()=>{
        this.router.navigate(['obligation/list']);
        },  100)      
  }

  setnom(value): void {
    this.nom=(value.target as HTMLInputElement).value;
    console.log(this.nom)
  }
  setdescription(value): void {
    this.description=(value.target as HTMLInputElement).value;
    console.log(this.description)
  }
  setvaleur_nom(value):void{
    this.valeur_nom=(value.target as HTMLInputElement).value;
    console.log(this.valeur_nom)
  }
  settaux_c(value): void {
    this.taux_c=(value.target as HTMLInputElement).value;
    console.log(this.taux_c)
  }
  settaux_r(value): void {
    this.taux_r=(value.target as HTMLInputElement).value;
    console.log(this.taux_r)
  }
  setnombreAnnee(value): void {
    this.nombreAnnee=(value.target as HTMLInputElement).value;
    console.log(this.nombreAnnee)
  }
  setnombreObligation(value): void {
    this.nombreObligation=(value.target as HTMLInputElement).value;
    console.log(this.nombreObligation)
  }
}
