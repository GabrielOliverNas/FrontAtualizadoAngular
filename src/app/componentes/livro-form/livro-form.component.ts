import { CategoriaFormComponent } from './../categoria-form/categoria-form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent {

  constructor() { }

  ultimoId = 0;
  nome: string;
  preco: number;
  adicionado: boolean = false;
  paginas: number;
  categoria: CategoriaFormComponent;
  livroAdd = [];
  codigo: number;

  adicionar(nome, paginas, preco, codigo, categoria) {
    this.adicionado = true;
    this.livroAdd.push({
      id: ++this.ultimoId,
      nome: this.nome,
      paginas: this.paginas,
      preco: this.preco,
      codigo: this.codigo,
      categoria: this.categoria
    });
  }
}
