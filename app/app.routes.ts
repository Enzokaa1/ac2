import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './cad-tarefa/cad-tarefa';
import { ListaTarefasComponent } from './list-tarefas/list-tarefas';

export const routes: Routes = [
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastrarTarefaComponent },
  { path: 'lista', component: ListaTarefasComponent },
  { path: '**', redirectTo: '/cadastro' }
];