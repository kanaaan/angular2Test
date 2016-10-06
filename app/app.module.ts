import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ListboxComponent} from './listbox.component';
import {TableComponent} from './table.Component'
import { TableItemComponent } from './tableitem.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,ListboxComponent,TableComponent,TableItemComponent],
    bootstrap: [AppComponent,ListboxComponent,TableComponent,TableItemComponent]
})

export class AppModule {
    constructor() {
        //console.log('AppModule constructor');
    }
}