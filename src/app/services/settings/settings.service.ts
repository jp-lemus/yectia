import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  settings: any = {
    theme: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.loadSettings();

    this.getTheme();
  }



  saveSettings() {
    localStorage.setItem( 'settings', JSON.stringify( this.settings ) );

  }

  loadSettings() {
    if ( localStorage.getItem( 'settings' )) {
      this.settings = JSON.parse( localStorage.getItem( 'settings' ) );
    }
  }



  setTheme( theme: string ) {
    this.settings.theme = theme;
    this.getTheme();
    this.saveSettings();
  }

  getTheme() {
    const url = `assets/css/colors/${ this.settings.theme }.css`;
    this._document.getElementById( 'theme' ).setAttribute( 'href', url );
  }




}
