import { Component } from '@angular/core';
import { RepoService } from './repos/repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RepoService]
})
export class AppComponent {
  title = 'app';
}
