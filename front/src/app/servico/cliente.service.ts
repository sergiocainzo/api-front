import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // URL da API
  private url: string = 'http://localhost:8080';

  // Construtor
  constructor(private http: HttpClient) { }

  // Método para selecionar todos os clientes
  selecionar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  // Metodo de Cadastro
  cadastrar(obj: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, obj);
  }

  // Metodo de editar de Cadastro
  editar(obj: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url, obj);
  }

  // Metodo para remover clientes
  remover(codigo: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + codigo)
  }

}
