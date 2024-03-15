import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pnsamento.';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css'],
})
export class CriarPensamentosComponent implements OnInit {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Apredendo angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Novo pensamento criado');
  }

  cancelar() {
    alert('Novo pensamento criado');
  }

}
