import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/services/solution-client.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  problem: Problem;

  constructor(private appComponents: AppComponent) {
   }

  ngOnInit() {
    this.problem = this.appComponents.problem;
  }

	onClick(){
		//this.appComponents.getResult(this.problem.exampleData);
	}

}
