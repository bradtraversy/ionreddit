import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { RedditsPage } from '../pages/reddits/reddits';
import { SettingsPage } from '../pages/settings/settings';
import {DetailsPage} from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    RedditsPage,
    SettingsPage,
    DetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RedditsPage,
    SettingsPage,
    DetailsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
