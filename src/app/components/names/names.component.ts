import { Component, OnInit } from '@angular/core';
import { SolutionClientService } from 'src/app/services/solution-client.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  names: Map<number, string>;

  constructor(private solutionClientService: SolutionClientService, private appComponents: AppComponent) { this.names = new Map(); }

  ngOnInit() {
    this.solutionClientService.getNames().subscribe(list => {
		for(let map of list){
			let id = parseInt(map['id']);
			let name = map['name'];
			this.names.set(id, name);
		}	
		this.appComponents.getProblem(this.names.keys().next().value);
    });
  }

  selectChanged(id: string) {
    this.appComponents.getProblem(parseInt(id));
  }

}
