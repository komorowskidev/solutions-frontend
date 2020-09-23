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
    this.problem = {id: -1, name: '', description : 'choose problem name', exampleData : '', solution : ''};
  }

  public getProblem(id: number) {
    this.solutionClientService.getProblem(id).subscribe(problem => {
	  this.problem.id = problem.id;
	  this.problem.name = problem.name;
	  this.problem.description = problem.description;
      this.problem.exampleData = problem.exampleData;
	  this.problem.solution = '';
    });
  }

	public getResult(data: string){
		this.solutionClientService.getSolution(this.problem.id, data).subscribe(solution => {
			this.problem.solution = solution;
		});
	}
}
