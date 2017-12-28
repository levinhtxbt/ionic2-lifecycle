import { Injectable } from '@angular/core';

@Injectable()
export class MusicPlayerService {

  constructor() { }

  play() {
    console.log('** Music Service : Play');
  }

  pause() {
    console.log('** Music Service : Pause');
  }

  stop() {
    console.log('** Music Service : Stop');
  }
}
