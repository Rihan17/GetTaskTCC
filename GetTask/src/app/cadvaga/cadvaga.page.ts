import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadvaga',
  templateUrl: './cadvaga.page.html', // Corrija o caminho do template
  styleUrls: ['./cadvaga.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadvagaPage {

  constructor(private navCtrl: NavController) {}

  voltarHome() {
    this.navCtrl.navigateBack('/tabs/tab1');
  }
}
