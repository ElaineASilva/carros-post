import { Component, OnInit } from '@angular/core';
import { CarrosService } from '../services/carros.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
  providers: [MessageService]
})
export class CadastrarComponent implements OnInit {

  name: string = '';
  ano: string = '';

  constructor(
    private carrosService: CarrosService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    if (this.campoVazio()) {
      this.alertaCampoVazio();
    } else {
      this.carrosService.cadastrarCarro(
        this.name,
        Number(this.ano),
        this.alertaCadastroSucesso()
      );
      this.limpaCampos();
    }
  };

  campoVazio(): boolean {
    if (this.name == '' || this.ano == '') {
      return true;
    }
    return false;
  };

  alertaCadastroSucesso(): void {
    this.messageService.add(
      {
        severity: 'success',
        summary: 'Sucesso',
        detail: 'O carro foi cadastrado na base de dados!',
        life: 5000
      }
    );
  };

  alertaCampoVazio(): void {
    this.messageService.add(
      {
        severity: 'warn',
        summary: 'Atenção',
        detail: 'Preencha todos os campos!',
        life: 5000
      }
    );
  };

  limpaCampos(): void {
    this.name = '';
    this.ano = '';
  };

}
