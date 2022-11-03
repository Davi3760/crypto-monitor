import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'crypto-search',
  templateUrl: './crypto-search.component.html',
  styleUrls: ['./crypto-search.component.scss']
})
export class CryptoSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
