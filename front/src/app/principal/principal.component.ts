import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Construtor
  constructor(private servico: ClienteService) { }

  // Variável para visibilidade dos botões
  btnCadastro: boolean = true;

  // JSON de clientes
  clientes: Cliente[] = [];

  // Método de seleção
  selecionar(): void {
    this.servico.selecionar().subscribe(retorno => this.clientes = retorno);
  }

  // Método de Inicialização
  ngOnInit(){
    this.selecionar();
  }

}
