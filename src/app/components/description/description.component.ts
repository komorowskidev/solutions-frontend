import { Component, OnInit } from '@angular/core';
import { SolutionClientService, Problem } from 'src/app/services/solution-client.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  problem: Problem;

  constructor(private appComponents: AppComponent) {
   }

  ngOnInit() {
    this.problem = this.appComponents.problem;
  }

}
