import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento.';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamento) => {
      this.listaPensamento = listaPensamento
    });
  }
}
