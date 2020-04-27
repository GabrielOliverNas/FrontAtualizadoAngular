import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-listar',
  templateUrl: './page-listar.component.html',
  styleUrls: ['./page-listar.component.css']
})
export class PageListarComponent {

  constructor(private router: Router){

  }

  voltarParaHome(): void {

    this.router.navigate(['home']);
  }


}
