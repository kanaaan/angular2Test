import { Component } from '@angular/core';
import {PersonsService, Person} from './persons.service';

@Component({
    selector: 'tableitem-ctrl',
    template: `
    <div>
        <th>{{this.person.Firstname}}</th>
        <th>{{this.person.Lastname}}</th> 
    </div>
    `
    ,providers :[PersonsService]
})


export class TableItemComponent {
    dataService:PersonsService;
    person:Person;

    constructor(private personsService:PersonsService) {
        this.dataService=personsService;
        this.person=this.dataService.getLast();
        //console.log('-- TableItemComponent constructor:'+this.person.Firstname+','+this.person.Lastname);
        
    } 
 }