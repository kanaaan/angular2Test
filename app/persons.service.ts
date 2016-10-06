import { Injectable } from '@angular/core';

export class Person {
  Firstname: string ;
  Lastname: string ;
}

export var persons: Person[]=[{Firstname: 'Firstname', Lastname: 'Lastname'}];
    

@Injectable()
export class PersonsService {

    constructor()
    {
        
    }

    getPersons(): Person[]{
        return persons;
    }

    pushPerson(person:Person)
    {
        console.log('pushPerson');
        persons.push(person);
    }

    removeLast()
    {
        persons.splice(persons.length-1);
    }

    getLast():Person
    {
        console.log('getLast '+ (persons.length-1));
        return persons[persons.length-1];
    }
}