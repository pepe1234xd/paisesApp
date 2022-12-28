import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = '';
  hayError:boolean= false;
  paises:Country[]=[];
  paisesSugeridos:Country[]=[];
  mostrarSugerencias:boolean=false;

  constructor(private paisesService:PaisesService){}

  buscar(query:string){

    this.hayError=false;
    this.termino = query;
    this.mostrarSugerencias=false;
    
    this.paisesService.buscarPais(this.termino).subscribe( (paises)=>{
      console.log(paises);
      this.paises=paises;
    },(err)=>{
      this.hayError=true;
      this.paises=[];
    });  
  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;

    this.paisesService.buscarPais(termino).subscribe(paises=> this.paisesSugeridos=paises.splice(0,3),(err)=>this.paisesSugeridos=[])
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }
}
