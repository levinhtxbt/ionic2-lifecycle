import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MusicPlayerService } from '../../shared/shared';
import { CreditPage } from '../page';
import * as howler from 'howler';

@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {

  music: any;
  image: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private musicPlayer: MusicPlayerService) { }

  goToCredit() {
    this.navCtrl.push(CreditPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');

    let audioFile = this.navParams.get('audio');
    this.music = new howler.Howl({ src: [`assets/music/${audioFile}.mp3`]});
    this.image = `assets/imgs/${audioFile}.jpg`;
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.music.play();
    this.music.loop(true);
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
    this.music.pause();
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
    this.music.stop();
  }

}
