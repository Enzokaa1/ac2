import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  prazo: Date;
  concluida: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [];
  private tarefasSubject = new BehaviorSubject<Tarefa[]>([]);
  
  tarefas$ = this.tarefasSubject.asObservable();

  listar() {
    return [...this.tarefas];
  }

  adicionar(titulo: string, descricao: string, prazo: Date) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo: titulo,
      descricao: descricao,
      prazo: prazo,
      concluida: false
    };
    
    this.tarefas.push(novaTarefa);
    this.tarefasSubject.next([...this.tarefas]);
  }

  remover(id: number) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    this.tarefasSubject.next([...this.tarefas]);
  }

  marcarConcluida(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida; 
      this.tarefasSubject.next([...this.tarefas]);
    }
  }

  getTotalTarefas(): number {
    return this.tarefas.length;
  }

  getTarefasConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  getTarefasPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}