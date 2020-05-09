import { Component, OnInit } from '@angular/core';
import {ArticulosService} from './Services/articulos.service';
import {HttpClient} from '@angular/common/http';
import {TableBasicExample} from './components/articulo-list/table-basic-example';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyecto';
  articulos: Articulo[]=[];
  art: Articulo={
    codigo:null,
    descripcion: null,
    precio: null
  }
  //arti: Articulo;
//arti = new Articulo();

  constructor(private articulosServicio: ArticulosService){}
  ngOnInit(){
    this.recuperarTodos();
    //console.log(this.articulos);
  }
  recuperarTodos(){
    this.articulosServicio.recuperarTodos().subscribe(result => {this.articulos=result;
                                    console.log("appComponent");
                                    console.log(this.articulos);},
                                            error =>  console.log(error.message)
                                            
                                           );
    
  }
  alta(){
    this.articulosServicio.alta(this.art).subscribe(datos => {
      if(datos['resultado']=='OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
  baja(codigo){
    this.articulosServicio.baja(codigo).subscribe(datos => {
      if(datos['resultado']=='OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
  modificacion(){
    this.articulosServicio.modificacion(this.art).subscribe(datos=>{
      if(datos['resultado']=='OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
  seleccionar(codigo){
    this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  }
  hayRegistros(){
    return true;
  }
}
