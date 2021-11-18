import { Component } from '@angular/core';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FRONT';

  constructor(private APIService: APIService) {
    
  }
  ngOnInit() {
    this.APIService.getAuthorizationToken().subscribe((data) => {
      console.log('Authorization code is:', data);
    });
  }
}

