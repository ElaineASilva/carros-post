import { Component, OnInit } from '@angular/core';
import { Carro } from '../interfaces/carro';
import { CarrosService } from '../services/carros.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  carros: Array<Carro> = [];

  constructor(private carrosService: CarrosService) { }

  ngOnInit(): void {
    this.carrosService.listarCarros()
    .subscribe(carros => this.carros = carros);
  }
}
