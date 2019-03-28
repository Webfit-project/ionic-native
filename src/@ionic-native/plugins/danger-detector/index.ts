import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Plugin({
  pluginName: 'DangerDetector',
  plugin: 'cordova-plugin-dangerdetector',
  pluginRef: 'cordova.plugins.dangerdetector',
  repo: '',
  platforms: ['Android', 'iOS']
})

@Injectable()
export class dangerDetector extends IonicNativePlugin {


  @Cordova({
     successIndex : 1,
     errorIndex : 2,
     observable: true
   })

   coolMethod(options: dangerDetectorOptions): Observable<any> {
     return;
   }
}

export interface dangerDetectorOptions {
  _sMessage: string;
}
