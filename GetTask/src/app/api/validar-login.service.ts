import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule,} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ValidarLoginService {

  constructor(private httpClient : HttpClient, HttpClientmodule : HttpClientModule) { }
  private apiEndpoint : string = 'http://localhost:8888/';
  private consultalogin (login : string) {

    console.log(`${this.apiEndpoint}${login}`)

    return this.httpClient.get(`${this.apiEndpoint}${login}`)
  }

  validarLogin(p_nomeusuario:string,p_senhausuario:string){
    const fnUser = 'validarlogin';

    const formData = new FormData();
    formData.append('nomeusuario',p_nomeusuario);
    formData.append('senhausuario',p_senhausuario);

    return this.httpClient.post(`${this.apiEndpoint}${fnUser}`, formData)
    
  }
}
