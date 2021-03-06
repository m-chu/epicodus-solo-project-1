import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BeerListComponent } from './beer-list/beer-list.component';
import { EditBeerTapComponent } from './edit-beer-tap/edit-beer-tap.component';
import { AddBeerTapComponent } from './add-beer-tap/add-beer-tap.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    EditBeerTapComponent,
    AddBeerTapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
