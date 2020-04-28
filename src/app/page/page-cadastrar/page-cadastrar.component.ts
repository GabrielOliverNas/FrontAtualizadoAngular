import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoriaFormComponent } from 'src/app/componentes/categoria-form/categoria-form.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/domain/categoria';

@Component({
  selector: 'app-page-cadastrar',
  templateUrl: './page-cadastrar.component.html',
  styleUrls: ['./page-cadastrar.component.css']
})


// tslint:disable-next-line: component-class-suffix
export class PageCadastrarComponents implements OnInit {

  public formulario: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [
        Validators.required,
      ]]
    });
  }
  submitForm() {
    const categoriaPayLoad: Categoria = this.formulario.value;
    this.httpClient
      .post('http://localhost:8080/categoria', categoriaPayLoad)
      .subscribe((resp: Categoria) => {
        this.router.navigate(['listar']);
      });
  }
  onClickLimpar() {
    this.formulario.reset();
  }
}
