import { Component } from '@angular/core';

@Component({
    selector: 'tableitem-ctrl',
    template: `
    <div>
        <th>{{Firstname}}</th>
        <th>{{Lastname}}</th> 
    </div>
    `
})


export class TableItemComponent {
    Firstname: string ='Firstname';
    Lastname: string ='Lastname';

    constructor() {
        console.log('TableItemComponent constructor');
    }    
 }