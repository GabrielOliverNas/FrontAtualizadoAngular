import { AppRoutingModule } from './app-routing.module';
import { PageCadastrarComponents } from './page/page-cadastrar/page-cadastrar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LivroFormComponent } from './componentes/livro-form/livro-form.component';
import { CategoriaFormComponent } from './componentes/categoria-form/categoria-form.component';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageListarComponent } from './page/page-listar/page-listar.component';
import { CardComponent } from './componentes/card/card.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroFormComponent,
    CategoriaFormComponent,
    PageHomeComponent,
    PageListarComponent,
    PageCadastrarComponents,
    CardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
