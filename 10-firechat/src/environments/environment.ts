// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDuHDufB2reaR5YbMKPIRdBeZ79MRW-YxU',
    authDomain: 'firechat-7e2cf.firebaseapp.com',
    databaseURL: 'https://firechat-7e2cf.firebaseio.com',
    projectId: 'firechat-7e2cf',
    storageBucket: 'firechat-7e2cf.appspot.com',
    messagingSenderId: '662749619384'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
