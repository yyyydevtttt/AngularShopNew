import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Shop New';

  constructor(private router: Router) {
    this.router.events
      .filter(e => e instanceof NavigationStart)
      .pairwise()
      .subscribe((e) => { 
        console.log(e);
      }
    );
  }

}
