import { NgModule, HttpClientModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentosComponent,
    ListarPensamentoComponent,
    PensamentoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
