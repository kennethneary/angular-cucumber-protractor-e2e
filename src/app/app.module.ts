import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PastebinComponent } from './pastebin/pastebin.component';
import { AddPasteComponent } from './add-paste/add-paste.component';
import { ViewPasteComponent } from './view-paste/view-paste.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { CreateModalComponent } from './modal/create/create.component';


//In memory Web api to simulate an http server
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PastebinComponent,
    AddPasteComponent,
    ViewPasteComponent,
    AboutComponent,
    ContactComponent,
    CreateModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
