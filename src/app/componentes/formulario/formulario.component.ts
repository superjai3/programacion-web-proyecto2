import { Component } from '@angular/core';
import { GeneroService } from '../../services/genero.service';
import { NacionalidadService } from '../../services/nacionalidad.service';
import { Nacionalidad } from '../../modues/nacionalidad';
import { Genero } from '../../modues/genero';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  genero: Genero | null = null;
  nacionalidad: Nacionalidad | null = null;

  constructor(
    private generoService: GeneroService,
    private nacionalidadService: NacionalidadService
  ) {}

  buscarDatos() {
    this.generoService.getGenero(this.nombre).subscribe(data => {
      this.genero = data;
    });

    this.nacionalidadService.getNacionalidad(this.nombre).subscribe(data => {
      this.nacionalidad = data;
    });
  }
}
