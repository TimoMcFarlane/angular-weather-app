import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() result: any;
  ICON_BASE_URL = environment.ICON_BASE_URL;
  constructor() { }

  ngOnInit() {
  }

}
