import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../services/tarefa';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cad-tarefa.html',
  styleUrl: './cad-tarefa.css'
})
export class CadastrarTarefaComponent {
  titulo: string = '';
  descricao: string = '';
  prazo: string = '';

  constructor(private tarefaService: TarefaService) {}

  cadastrar() {
    if (this.titulo.trim() && this.prazo) {
      const prazoDate = new Date(this.prazo);
      this.tarefaService.adicionar(this.titulo, this.descricao, prazoDate);
      this.limparFormulario();
    } else {
      alert('Preencha o título e prazo');
    }
  }

  private limparFormulario() {
    this.titulo = '';
    this.descricao = '';
    this.prazo = '';
  }
}