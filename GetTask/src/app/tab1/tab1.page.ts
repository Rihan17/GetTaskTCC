import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private navCtrl: NavController) {}

  cadastroVaga() {
    this.navCtrl.navigateForward('/cadvaga');

  }

  planosTaskPlus() {
    this.navCtrl.navigateForward('/taskplus');

  }
}
