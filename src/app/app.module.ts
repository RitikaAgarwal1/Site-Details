import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { AddDomainDetailsComponent } from './site-details/add-domain-details/add-domain-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidepanelComponent,
    SiteDetailsComponent,
    AddDomainDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
