import { Component, OnInit } from '@angular/core';
import { CategoriaFormComponent } from 'src/app/componentes/categoria-form/categoria-form.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-cadastrar',
  templateUrl: './page-cadastrar.component.html',
  styleUrls: ['./page-cadastrar.component.css']
})


// tslint:disable-next-line: component-class-suffix
export class PageCadastrarComponents implements OnInit{

  public formulario: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

    ngOnInit(){
      this.formulario = this.formBuilder.group({
        nome: [null, [
          Validators.required,
        ]]

      });
    }
    submitForm(){
      console.log(this.formulario.value);
      console.log(this.formulario.valid);
    }
    onClickLimpar(){
      this.formulario.reset();
    }
}
