import { Component, OnInit } from '@angular/core';
import { SolutionClientService } from 'src/app/services/solution-client.service';
import { MatSelectChange } from '@angular/material/select';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  names: Set<string>;

  constructor(private solutionClientService: SolutionClientService, private appComponents: AppComponent) { this.names = new Set(); }

  ngOnInit() {
    this.solutionClientService.getNames().subscribe(names => {
      this.names = names;
    });
  }

  selectChanged(namesValue: MatSelectChange) {
    this.appComponents.getProblem(namesValue.value);
  }

}
