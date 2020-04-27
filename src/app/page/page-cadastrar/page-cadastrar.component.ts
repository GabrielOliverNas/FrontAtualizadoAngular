import { Component } from '@angular/core';
import { CategoriaFormComponent } from 'src/app/componentes/categoria-form/categoria-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cadastrar',
  templateUrl: './page-cadastrar.component.html',
  styleUrls: ['./page-cadastrar.component.css']
})


export class PageCadastrarComponents {

  constructor(private router: Router) { }

  ultimoId = 0;
  nome: string;
  preco: number;
  adicionado = false;
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

  voltarParaHome(): void {

    this.router.navigate(['home']);
  }


}
