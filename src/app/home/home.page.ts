import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public platform: Platform,
    public alertController: AlertController,
    private admobFree: AdMobFree
  ) {}

  showBannerAdFreeTest() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: "ca-app-pub-9306767475974879/9489644613",
      isTesting: true,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e)); 
  }

  showBannerAdFree() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: "ca-app-pub-9306767475974879/9489644613",
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e)); 
  }

}


