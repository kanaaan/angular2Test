import { Component } from '@angular/core';
import { TableItemComponent } from './tableitem.component';

class Person {
  Firstname: string ;
  Lastname: string ;
}

@Component({
    selector: 'table-ctrl',
    template: '\
    <h1>TableComponent</h1>\
    <input #iFirstname type="text" class="form-control" placeholder="Firstname" (blur)="this.person.Firstname=iFirstname.value"/>\
    <h1></h1>\
    <input #iLastname type="text" class="form-control" placeholder="Lastname" (blur)="AddLastname(iLastname.value)"/>\
    <h1></h1>\
    <button class="btn btn-success" (click)="AddClicked($event)">Add</button>\
    <button  class="btn btn-warning" (click)="RemoveClicked($event)">Remove</button>\
    <h1></h1>\
    <table class="table table-inverse">\
        <div *ngFor="let line of data">\
         <tableitem-ctrl></tableitem-ctrl>\
        </div>\
    </table>\
    '
    //,directives: [TableItemComponent]
})



export class TableComponent {
    
    data: Person[] = [{Firstname: 'a', Lastname: 'b'}];
    
    person: Person;
    
    constructor() {
        console.log('TableComponent constructor');
        this.person=new Person();
    }
    public AddClicked(event)
    {
        console.log('AddClicked '+this.person.Firstname+' '+this.person.Lastname);
        this.data.push(this.person);
    }
    public RemoveClicked(event)
    {
        console.log('RemoveClicked');
        this.data.splice(this.data.length-1);
    } 

    AddLastname(a: string) {
        this.person.Lastname=a;
    }
 }