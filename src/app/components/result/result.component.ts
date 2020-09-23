import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/services/solution-client.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  problem: Problem;

  constructor(private appComponents: AppComponent) {
   }

  ngOnInit() {
    this.problem = this.appComponents.problem;
  }

}
