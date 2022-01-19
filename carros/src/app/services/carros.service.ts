import { Injectable } from '@angular/core';
import { Carro } from '../interfaces/carro';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  readonly url: string = 'https://localhost:7094/api'

  constructor(private http: HttpClient) {
  }

  listarCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.url}/carro`)
    .pipe(
      retry(2),
      catchError(this.manipulaErro)
    );
  }

  manipulaErro(error: HttpErrorResponse) {
    let mensagemErro = '';
    if (error.error instanceof ErrorEvent) {
      // Erro no lado do cliente
      mensagemErro = error.error.message;
    } else {
      // Erro no lado do servidor
      mensagemErro = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(mensagemErro);
  };

  cadastrarCarro(name: string, ano: number, sucesso: any) {
    return this.http.post<Carro>(`${this.url}/carro`,
      { id: '', name, ano }
    ).subscribe(
      dados => dados,
      respostaRequisicao => {
        if (respostaRequisicao.status == 200) {
          sucesso; // callback de sucesso
        }
      },
    );
  };

}
