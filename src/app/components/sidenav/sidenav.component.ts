import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() sideNavStatus : boolean = false;

  list = [
   { id: 1,
    name: 'Javascript',
    icon: 'home',
  },
   { id: 2,
    name: 'Javascript',
    icon: 'home',
  },
   { id: 3,
    name: 'Javascript',
    icon: 'home',
  },
  { id: 4,
    name: 'Books',
    icon: 'book',
  },
  ]

}
