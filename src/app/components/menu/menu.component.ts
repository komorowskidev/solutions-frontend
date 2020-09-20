import { Component, OnInit } from '@angular/core';
import { SolutionClientService } from 'src/app/services/solution-client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  version: string;

  constructor(private solutionClientService: SolutionClientService) {
    this.version = 'Please wait about 20 seconds. Backend application is waking up.';
  }

  ngOnInit() {
    this.solutionClientService.getVersion().subscribe(version => {
      this.version = version;
    });
  }

}
