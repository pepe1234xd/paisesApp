import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  
  termino:string = '';
  hayError:boolean= false;
  paises:Country[]=[];

  constructor(private paisesService:PaisesService){}

  buscar(query:string){
    this.hayError=false;
    this.termino = query;
    
    this.paisesService.buscarCapital(this.termino).subscribe( (paises)=>{
      console.log(paises);
      this.paises=paises;
    },(err)=>{
      this.hayError=true;
      this.paises=[];
    });  
  }

  sugerencias(query:string){
    this.hayError=false;
  } 
}
