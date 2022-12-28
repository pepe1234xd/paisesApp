import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais !: Country;

  /**
   *Revisar la ruta seleccionada para agrgar sugerencias
   */
  constructor(private activatedRoute:ActivatedRoute, private paisesService:PaisesService) {
  }

  ngOnInit(){

    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.paisesService.getPaisPorCodigo(id)),
      tap(console.log)
    ).subscribe(pais =>this.pais=pais[0])

    // this.activatedRoute.params.subscribe(({id})=>{
    //   this.paisesService.getPaisPorCodigo(id).subscribe(pais=>{
    //     console.log(pais);
    //   })
    // })
  }
  
}
