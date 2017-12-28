import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage, MusicPage, CreditPage } from '../pages/page';
import { MusicPlayerService } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MusicPage,
    CreditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MusicPage,
    CreditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MusicPlayerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
