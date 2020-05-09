import {Component, OnInit} from '@angular/core';
import {ArticulosService} from '../../Services/articulos.service';
import {HttpClient} from '@angular/common/http';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnInit{
    constructor(private articulosServicio: ArticulosService){}
    art: Articulo={
      codigo:null,
      descripcion: null,
      precio: null
    }
    articulos: Articulo[]=[];
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumnsArt: string[] = ['codigo', 'descripcion', 'precio'];
  dataSource: Articulo[]=[];
  recuperarTodos(){
    this.articulosServicio.recuperarTodos().subscribe(result => {this.articulos=result;
                                    //this.dataSource=result;
                                    console.log("table");
                                    console.log(result[0].codigo);
                                    console.log(this.dataSource);
                                    this.dataSource= result;
                                    console.log(this.dataSource);
                                    },
                                            error =>  console.log(error.message)
                                            
                                           );
    
  }
  ngOnInit(){
    this.recuperarTodos();
    //console.log(this.articulos);
  }
}