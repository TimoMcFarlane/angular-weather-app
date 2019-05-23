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
  error: boolean;
  activeSearch: string;

  constructor(private api: ApiService) {
    this.searchHistory = [];
  }

  removeSearchItem(item) {
    this.searchHistory = this.searchHistory.filter((history) => {
      if(history !== item) {
        return history;
      }
    })
    this.weather = null;
    this.forecast = null;
  }
  submitSearch(searchTerm: string) {
    if(searchTerm !== this.activeSearch) {
      this.loading = true;
      this.error = false;
      this.activeSearch = searchTerm;
      
      if(!this.searchHistory.contains(searchTerm)) {
        this.searchHistory.push(searchTerm);
      }
      
      this.api.fetchWeather(searchTerm, (response) => {
        if(response.hasOwnProperty('error')) {
          this.error = true;
          this.loading = false;
          return;
        }
        this.weather = response;
        this.api.fetchForecast(searchTerm, (response) => {
          if(response.hasOwnProperty('error')) {
            this.error = true;
            this.loading = false;
            return;
          }
          this.forecast = response;
          this.loading = false;
        });
      });
    }
  }
}
