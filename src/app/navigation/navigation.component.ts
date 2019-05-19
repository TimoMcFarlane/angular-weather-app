import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() submitSearch = new EventEmitter<string>();
  
  searchTerm: string;

  onSearch() {
    this.submitSearch.emit(this.searchTerm);
    this.searchTerm = "";
  }

  onKey(event: any) {
    if(event.keyCode == 13) {
      this.onSearch();
    }
  }

  ngOnInit() {
  }

}
