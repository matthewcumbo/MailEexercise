import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-native',
  templateUrl: './native.page.html',
  styleUrls: ['./native.page.scss'],
})
export class NativePage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  // we can use the capacitor toast,
  // but this is another version
  // (does not require capacitor)
  async toast(text:string, location:'top'|'middle'|'bottom'){
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 1500,
      position: location
    });
    await toast.present();
  }

async save(){
  await Preferences.set({
    key: 'name',
    value: 'Matt'
  });
  console.log('saved');
}

async load(){
  const {value} = await Preferences.get({key:'name'});
  console.log('Hello '+ value +'!');
}

}