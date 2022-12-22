import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ResourceLibModule } from './resource-lib/resource-lib.module';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ResourceLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
