import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {


  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Principal 1', url: '/dashboard' },
        { title: 'Principal 2', url: '/dashboard' },
        { title: 'Principal 3', url: '/dashboard' }
      ]
    }
  ];

  constructor() { }

}
