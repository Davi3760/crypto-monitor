import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoHeaderComponent } from './crypto-header/crypto-header.component';
import { CryptoSearchComponent } from './crypto-search/crypto-search.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CryptoHeaderComponent,
    CryptoSearchComponent,
    CryptoListComponent
  ],
  exports: [
    CryptoHeaderComponent,
    CryptoSearchComponent,
    CryptoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
