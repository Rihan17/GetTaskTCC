import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ValidarLoginService } from '../api/validar-login.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
  standalone: false,
})
export class TelaLoginPage {
senhausuario : string = "";
nomeusuario : string = "";

  constructor(private mensagemAlerta : AlertController, private loginService : ValidarLoginService, private router : Router ) { }

  async validarLogin(){
    this.loginService.validarLogin(this.nomeusuario, this.senhausuario).subscribe(
      async(data) => {
        console.log('200', data);
        const alerta = await this.mensagemAlerta.create({
          header: 'GETTASK - LOGIN',
          subHeader: 'Sucesso',
          message : 'Bem vindo',
          buttons: ['Fechar'],
        });
        alerta.present();

        this.router.navigate(['/../tabs/tab1'])
      },
     async (error) => {
      console.error(error);

      const alerta = await this.mensagemAlerta.create({
        header: 'GETTASK - LOGIN',
        subHeader: 'Acesso Invalido',
        message: 'Usuário ou Senha Invalidos',
        buttons: ['Fechar'],
      });
      await alerta.present();
     },
    );
  }
}
