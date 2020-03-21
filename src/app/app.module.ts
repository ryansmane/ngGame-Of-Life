import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParamsForm } from './components/params-form.component';
import { ConwaysGrid } from './components/conways-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ParamsForm,
    ConwaysGrid
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
