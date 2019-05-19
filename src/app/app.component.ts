import { Component } from '@angular/core';
import { ApiService } from './utils/ApiService';
import { Current, Upcoming } from './utils/model/Forecast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weather: Current;
  forecast: Upcoming;
  searchHistory: string[];
  loading: boolean;

  constructor(private api: ApiService) {
    this.searchHistory = [];
  }

  removeSearchItem(item) {
    this.searchHistory = this.searchHistory.filter((history) => {
      if(history !== item) {
        return history;
      }
    })
  }

  submitSearch(searchTerm: string) {
    this.loading = true;
    this.searchHistory.push(searchTerm);
    this.api.fetchWeather(searchTerm, (response) => {
      this.weather = response;
      this.api.fetchForecast(searchTerm, (response) => {
        this.forecast = response;
        this.loading = false;
      });
    });
  }
}
