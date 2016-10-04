import { Component,Input } from '@angular/core';

@Component({
    selector: 'Map-app',
    template: `
    <h1>Map App</h1>
    <p>Add people <input class="form-control" value={{Author}}></p>
    <p>Add people <input class="form-control" [value]="Author"></p>
   
    <h3>by {{Author}}</h3>
    `
})


export class AppComponent {
    Author: string ='The Author';

 }