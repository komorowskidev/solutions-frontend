import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionClientService {

  constructor(private httpClient: HttpClient) { }

  public getVersion(): Observable<string> {
    return this.httpClient.get<string>('https://solutions-backend.herokuapp.com/version');
  }

  public getNames(): Observable<Set<string>> {
    return this.httpClient.get<Set<string>>('https://solutions-backend.herokuapp.com/names');
  }
}
