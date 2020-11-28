import { Component, OnInit } from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  constructor(
      protected toastController: ToastController,
      protected loadingController: LoadingController,
      protected router: Router,
  ) { }

  ngOnInit() {
  }

}
