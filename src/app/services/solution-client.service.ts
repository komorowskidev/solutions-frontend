import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SolutionClientService {

  description: Observable<string> = new Observable<string>();

  constructor(private httpClient: HttpClient) {
   }

  public getVersion(): Observable<string> {
    return this.httpClient.get<string>(API_URL + '/version');
  }

  public getNames(): Observable<Array<Map<string, string>>> {
    return this.getFields('id,name');
  }

  private getFields(fields: string): Observable<Array<Map<string, string>>> {
	return this.httpClient.get<Array<Map<string, string>>>(API_URL + '/problems?fields=' + fields);
} 

  public getProblem(problemId: number) {
    return this.httpClient.get<Problem>(API_URL + '/problems/:' + problemId);
  }

	public getSolution(id: number, data: string) {
		return this.httpClient.post<string>(API_URL + '/problems/:' + id, data);
	}

}

export interface Problem {
		id: number;
		name: string;
        description: string;
        exampleData: string;
    }
