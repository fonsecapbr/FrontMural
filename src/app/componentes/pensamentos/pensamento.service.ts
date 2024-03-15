import { Injectable } from "@angular/core";
import { ListarPensamentoComponent } from "./listar-pensamento/listar-pensamento.component";

@Injectable({
  providedIn: 'root',
})


export class PensamentoService {
  private readonly API= 'http://localhost:3000/pensamentos'

  constructor() {


  ListarPensamentoComponent
  }
}
