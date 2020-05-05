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
    this.version = 'uknown version';
  }

  ngOnInit() {
    this.solutionClientService.getVersion().subscribe(version => {
      this.version = version;
    });
  }

}
