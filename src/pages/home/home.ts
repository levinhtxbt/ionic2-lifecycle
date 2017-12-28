import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicPage } from '../page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMusicPage(audio) {
    this.navCtrl.push(MusicPage,  { audio } );
  }
}
