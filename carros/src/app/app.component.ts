import { Component } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MegaMenuItem[] = [];

  constructor(private route: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Listar usuários',
        icon: 'pi pi-fw pi-list',
        command: () => this.route.navigate(['/listar'])
      },
      {
        label: 'Cadastrar carro',
        icon: 'pi pi-fw pi-list',
        command: () => this.route.navigate(['/cadastrar'])
      },
    ]
  }
}
