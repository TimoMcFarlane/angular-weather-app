import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @Input() result: any;
  ICON_BASE_URL = environment.ICON_BASE_URL;

  constructor() { }

  ngOnInit() {
  }

}
