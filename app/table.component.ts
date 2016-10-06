import { Component } from '@angular/core';
import { TableItemComponent } from './tableitem.component';
import { PersonsService, Person } from './persons.service';

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
    ,providers :[PersonsService]
})


export class TableComponent {
    
    data: Person[];
    person: Person;
    dataService:PersonsService;
    
    constructor(private personsService:PersonsService) {
        //console.log('TableComponent constructor');
        this.person=new Person();
        this.dataService=personsService;
        this.data=this.personsService.getPersons();
    }
    public AddClicked(event)
    {
        //console.log('AddClicked '+this.person.Firstname+' '+this.person.Lastname);
        var a: Person;
        a=new Person();
        a.Firstname=this.person.Firstname;
        a.Lastname=this.person.Lastname;
        this.dataService.pushPerson(a);
    }
    public RemoveClicked(event)
    {
        console.log('RemoveClicked');
        this.dataService.removeLast();
    } 

    AddLastname(a: string) {
        this.person.Lastname=a;
    }
 }