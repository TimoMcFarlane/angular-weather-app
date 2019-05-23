import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() weather: any;
  @Input() forecast: any;
  @Input() searchHistory: any;
  @Input() error: boolean;
  @Output() submitSearch = new EventEmitter<string>();
  @Output() removeSearchItem = new EventEmitter<string>();

  remove(term) {
    this.removeSearchItem.emit(term);
  }

  search(term) {
    this.submitSearch.emit(term);
  }

  constructor() { }

  ngOnInit() {
  }

}
