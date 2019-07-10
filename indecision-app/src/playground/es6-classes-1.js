class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hi. I am ${this.name}!`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

const me = new Student('Santiago Calvo', 33, 'Computer science');
console.log(me.getGretting());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGretting());
console.log(other.getDescription());

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGretting(){
        let gretting = super.getGretting();

        if(this.hasHomeLocation()){
            gretting += ` I'm visitting from ${this.homeLocation}.`;
        }

        return gretting;
    }
}

const traveler1 = new Traveler('Santiago Calvo', 33, 'Vitoria');
console.log(traveler1.getGretting());
console.log(traveler1.getDescription());

const traveler2 = new Student();
console.log(traveler2.getGretting());
console.log(traveler2.getDescription());