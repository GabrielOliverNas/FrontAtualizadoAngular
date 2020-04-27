import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Command } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() title: string;

  constructor(private router: Router){

  }

  irParaCadastro(): void {
    this.router.navigate(['cadastrar']);
  }

  irParaConsulta(): void {
    this.router.navigate(['listar']);
  }
}
