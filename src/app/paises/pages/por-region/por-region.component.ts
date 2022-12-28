import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  // regiones:string[]= ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA', 
  // 'NAFTA','SAARC'];
  regiones:string[]=['africa','americas','asia','europe','oceania']
  regionActiva: string= '';
  paises:Country[]=[];

  /**
   *llamando al servicio por region
   */
  constructor(private paisesService: PaisesService) {}

  getClaseCSS(region:string):string{
    return (region===this.regionActiva) ? 
    'btn btn-primary': 
    'btn btn-outline-primary';
  }

  activarPorRegion(region:string){
    if(region===this.regionActiva){return;}
    this.regionActiva = region;
    this.paises=[];
    this.paisesService.buscarPorRegion(region).subscribe(paises=>{
      this.paises=paises;
      console.log(paises);
    });
  }
}

