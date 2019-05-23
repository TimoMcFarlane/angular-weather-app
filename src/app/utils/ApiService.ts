import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Upcoming, Current } from './model/Forecast';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchWeather(city, callback): void {
    this.http.get<Current>(`${environment.BASE_URL}weather?q=${city}&units=metric&appid=${environment.API_KEY}`)
    .subscribe(response => callback(response), error => callback(error));
  };

  fetchForecast(city, callback): void {
    this.http.get<Upcoming>(`${environment.BASE_URL}forecast?q=${city}&units=metric&appid=${environment.API_KEY}`)
    .subscribe(response => callback(response), error => callback(error));
  };
}