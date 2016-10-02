import { Component,Input } from '@angular/core';

@Component({
    selector: 'Map-app',
    template: `
    <h1>Map App</h1>
    <p>Add people <input value={{Author}}></p>
    <p>Add people <input [value]="Author"></p>
   
    <h2>by {{Author}}</h2>
    `
})


export class AppComponent {
    Author: string ='the Author';

 }