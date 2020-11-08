import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class OnlinetestService {

  constructor(private httpClient: HttpClient) { }

  sayhello(): string {
    return " welcome using dependency injection"
  }

  loadData():Observable<Question[]>{
     return this.httpClient.get<Question[]>('/assets/dfdata.json');
  }

}

export class Question {
  constructor(
    public ques : string,
    public option1: string,
    public option2: string,
    public option3: string,
    public option4: string,
    public ansr: string
  ){}
}

 

