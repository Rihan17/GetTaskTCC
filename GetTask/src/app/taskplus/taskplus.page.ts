import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskplus',
  templateUrl: './taskplus.page.html',
  styleUrls: ['./taskplus.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TaskplusPage {
   constructor(private navCtrl: NavController) { }

   voltarHome() {
    this.navCtrl.navigateBack('/tabs/tab1');
  }
}
