import { Categoria } from './../../domain/categoria';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-listar',
  templateUrl: './page-listar.component.html',
  styleUrls: ['./page-listar.component.css']
})
export class PageListarComponent implements OnInit {

  public categorias: Array<Categoria>;

  constructor(private router: Router,
              private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient
    .get('http://localhost:8080/categoria')
    .subscribe((resp: Array<Categoria>) => {
      this.categorias = resp;
    });

  }
  voltarParaHome(): void {

    this.router.navigate(['home']);
  }


}
