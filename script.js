'use strict';

class Person {
        constructor(name, surname, height, weight, eyesColor, age){
            this.personName = name;
            this.personSurname = surname;
            this.personHeight = height;
            this.personWeight = weight;
            this.personEyesColor = eyesColor;
            this.personAge = age;         
        };
    
        aboutYou(){
            console.log(`Nazywam się ${this.personName} ${this.personSurname}, mam ${this.personHeight} wzrostu, ważę ${this.personWeight}, mój kolor oczu to ${this.personEyesColor}, mam ${this.personAge} lata`);
        };

        eat(){
            console.log('Jem :)');
        };
};

class Programist extends Person{
    constructor(name, surname, height, weight, eyesColor, age, language){
        super(name, surname, height, weight, eyesColor, age);
        this.programistLanguage = language;
    };

    programistLang(){
        console.log(`Programuję w języku ${this.programistLanguage}`);
    };

    allfunctions(){
        this.aboutYou();
        this.programistLang();
    }
}

var Person2 = new Programist('Sebastian', 'Bauer', '193cm', '102kg', 'piwne', '24', 'PHP');
Person2.allfunctions();



