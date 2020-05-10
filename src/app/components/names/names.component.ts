import { Component, OnInit } from '@angular/core';
import { SolutionClientService } from 'src/app/services/solution-client.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  names: Set<string>;

  constructor(private solutionClientService: SolutionClientService) { this.names = new Set(); }

  ngOnInit() {
    this.solutionClientService.getNames().subscribe(names => {
      this.names = names;
    });
  }

}
