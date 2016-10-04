import { Component } from '@angular/core';
import { TableItemComponent } from './tableitem.component';

@Component({
    selector: 'table-ctrl',
    template: '\
    <h1>TableComponent</h1>\
    <button class="button" (click)="AddClicked($event)">Add</button>\
    <button  class="button" (click)="RemoveClicked($event)">Remove</button>\
    <table>\
        <div *ngFor="let line of data">\
         <tableitem-ctrl></tableitem-ctrl>\
        </div>\
    </table>\
    '
    //,directives: [TableItemComponent]
})


export class TableComponent {
    data = [ 1,2,3,4 ];

    constructor() {
        console.log('TableComponent constructor');
    }
    public AddClicked(event)
    {
        console.log('AddClicked');
        this.data.push(this.data.length+1);
    }
    public RemoveClicked(event)
    {
        console.log('RemoveClicked');
        this.data.splice(this.data.length-1);
    }  
 }