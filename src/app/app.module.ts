import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel'
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

import { AppComponent } from './app.component';
import { PainelNegociacaoComponent } from './painel-negociacao/painel-negociacao.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent,
    PainelNegociacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    
    TableModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
