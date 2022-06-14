import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public profileImage = "";

  constructor(private route:Router) { 

    this.profileImage = "https://images.generated.photos/9MUMLJ6GPnPUFeImvjAyZN7Ht0IhuJa6ppCIwv9tuAA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY0NzMwLmpwZw.jpg"

  }

  ngOnInit() {
  }

  logout(){
    this.route.navigate(['/login']);
  }
}
