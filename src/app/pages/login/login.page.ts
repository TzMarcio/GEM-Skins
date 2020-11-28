import { Component, OnInit } from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';
import {BasePage} from '../../base/base.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {

  usuario: string;

  senha: string;

  constructor(
      protected router: Router,
      loadingController: LoadingController,
      toastController: ToastController,
  ) {
    super(toastController, loadingController);
  }

  ngOnInit() {

  }

  public async logar(){

    if (this.usuario && this.senha) {

      await this.exibirLoading();

      setTimeout(() => {
        if (this.usuario == 'admin' && this.senha == 'admin'){

          const usuario = {
            login: this.usuario,
            senha: this.senha,
          }

          localStorage.setItem('usuario', JSON.stringify(usuario));

          this.addMensagemSucesso('Logado com sucesso!');

          this.router.navigateByUrl('/pedido');

        }else{

          this.addMensagemErro('Usuario e Senha Invalidos.');

        }
        this.ocultarLoading();
      }, 5000);
    } else {

      this.addMensagemErro('Preencha todos os campos.');

    }

  }

  public

}
