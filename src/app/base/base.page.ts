import {LoadingController, ToastController} from '@ionic/angular';

export abstract class BasePage {

    private loading: any;

    constructor(
        protected toastController: ToastController,
        protected loadingController: LoadingController,
    ) {
    }

    public async exibirLoading(){
        if(!this.loading){

            this.loading = await this.loadingController.create({
                spinner: 'crescent',
            })

            await this.loading.present();

        }
    }

    public async ocultarLoading(){
        if (this.loading){

            this.loading.dismiss();

            this.loading = undefined;

        }
    }

    public async addMensagemErro(mensagem:string, duration?:number){

        const toast = await this.toastController.create({
            position: 'top',
            color: 'danger',
            message: mensagem,
            duration: duration ? duration : 3000
        });

        await toast.present();

    }

    public async addMensagemSucesso(mensagem:string, duration?:number){

        const toast = await this.toastController.create({
            position: 'top',
            color: 'success',
            message: mensagem,
            duration: duration ? duration : 3000
        });

        await toast.present();

    }

    public async addMensagemAlerta(mensagem:string, duration?:number){

        const toast = await this.toastController.create({
            position: 'top',
            color: 'warning',
            message: mensagem,
            duration: duration ? duration : 3000
        });

        await toast.present();

    }

}
