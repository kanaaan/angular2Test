import { Component } from '@angular/core';

@Component({
    selector: 'tableitem-ctrl',
    template: `
    <div>
        <th>Firstname</th>
        <th>Lastname</th> 
    </div>
    `
})


export class TableItemComponent {
    constructor() {
        console.log('TableItemComponent constructor');
    }    
 }