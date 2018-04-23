import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( private settingsService: SettingsService ) {

  }

  ngOnInit() {
    this.initThemeBox();
  }


  changeTheme( theme: string, link: any ) {
    const selectors: any = document.getElementsByClassName( 'selector' );
    for ( const href of selectors ) {
      href.classList.remove( 'working' );
    }
    link.classList.add( 'working' );

    this.settingsService.setTheme( theme );
  }

  initThemeBox() {
    const selectors: any = document.getElementsByClassName( 'selector' );

    const theme = this.settingsService.settings.theme;
    for ( const href of selectors ) {
      if ( href.getAttribute( 'data-theme' ) === theme ) {
        href.classList.add( 'working' );
        break;
      }
    }

  }


}
