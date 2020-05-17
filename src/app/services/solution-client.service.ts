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

  public getNames(): Observable<Set<string>> {
    return this.httpClient.get<Set<string>>(API_URL + '/names');
  }

  public getProblem(problemName: string) {
    return this.httpClient.get<Problem>(API_URL + '/problem?name=' + problemName);
  }

}

export interface Problem {
        description: string;
        exampleData: string;
    }
