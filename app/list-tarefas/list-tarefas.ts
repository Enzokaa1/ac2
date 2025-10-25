import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaService, Tarefa } from '../services/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-tarefas.html',
  styleUrl: './list-tarefas.css'
})
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  total: number = 0;
  concluidas: number = 0;
  pendentes: number = 0;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefaService.tarefas$.subscribe(tarefas => {
      this.tarefas = tarefas;
      this.atualizarContadores();
    });
  }

  removerTarefa(id: number) {
    this.tarefaService.remover(id);
  }

  marcarConcluida(id: number) {
    this.tarefaService.marcarConcluida(id);
  }

  private atualizarContadores() {
    this.total = this.tarefaService.getTotalTarefas();
    this.concluidas = this.tarefaService.getTarefasConcluidas();
    this.pendentes = this.tarefaService.getTarefasPendentes();
  }

  formatarData(data: Date): string {
    return new Date(data).toLocaleString('pt-BR');
  }
}