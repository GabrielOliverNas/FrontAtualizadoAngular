import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './backupDados/funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './backupDados/funcionario-form/funcionario-form.component';
import { LivroFormComponent } from './componentes/livro-form/livro-form.component';
import { CategoriaFormComponent } from './componentes/categoria-form/categoria-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    LivroFormComponent,
    CategoriaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
