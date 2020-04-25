import { Component } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  constructor() { }

  ultimoId = 0;
  nome: string  = 'Gustavo';
  adicionado: boolean = false;
  livroAdd = [];

  adicionar(nome) {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;

    this.livroAdd.push({
      id: ++this.ultimoId,
      nome: this.nome,
      adicionado: !this.adicionado

    });

  }
}
