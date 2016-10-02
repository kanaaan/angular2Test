import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ListboxComponent} from './listbox.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,ListboxComponent],
    bootstrap: [AppComponent,ListboxComponent]
})

export class AppModule {
    constructor() {
        console.log('AppModule constructor');
    }
}