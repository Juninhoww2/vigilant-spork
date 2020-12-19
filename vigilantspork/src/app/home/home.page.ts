import { Component } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Browser, Geolocation, Camera, Device } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);

    const wait = Geolocation.watchPosition({}, (position, err) => {
      console.log('Changed: ', position);
    })
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true, 
      resultType: CameraResultType.Base64
    })
    console.log(image);
  }

  async info() {
    const info = await Device.getBatteryInfo();
    console.log(info);
  }
  


  openBrowser() {
    Browser.open({url: 'https://ionicacademy.com'});
  }


}
