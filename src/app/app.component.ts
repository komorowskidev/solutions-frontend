import { Component } from '@angular/core';
import { SolutionClientService, Problem } from './services/solution-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'solutions-frontend';

  problem: Problem;

  constructor(private solutionClientService: SolutionClientService) {
    this.problem = {description : 'choose problem name', exampleData : 'data'};
  }

  public getProblem(problemName: string) {
    this.solutionClientService.getProblem(problemName).subscribe(problem => {
      this.problem.description = problem.description;
      this.problem.exampleData = problem.exampleData;
    });
  }
}
