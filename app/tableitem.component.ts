import { Component } from '@angular/core';

@Component({
    selector: 'tableitem-ctrl',
    template: `
    <div>
        <th>Firstname</th>
        <th>Lastname</th> 
        <th>Phone</th>
    </div>
    `
})


export class TableItemComponent {
    constructor() {
        console.log('TableItemComponent constructor');
    }    
 }