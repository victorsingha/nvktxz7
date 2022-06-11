import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.route.navigate(['/login']);
  }, 2000);
  }

}
