import { Component } from '@angular/core';

@Component({
    selector: 'Listbox-app',
    template: `
    <h1>
        <p>Listbox</p>
        <button  (click)="AddClicked($event)">Add</button>
        <button  (click)="RemoveClicked($event)">Remove</button>
    
        <ul>
        <li *ngFor="let item of data">
            {{ item }}
        </li>
        </ul>
    </h1>
    `
})


export class ListboxComponent {
    data = ['1', '2', '3', '4'];
    constructor() {
        console.log('ListboxComponent constructor');
    }
    public AddClicked(event)
    {
        console.log('AddClicked');
        this.data.push((this.data.length+1).toString());
    }
    public RemoveClicked(event)
    {
        console.log('RemoveClicked');
        this.data.splice(this.data.length-1);
    }
 }