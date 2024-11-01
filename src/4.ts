
class Key {
    private signature: number = Math.random();

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;
    constructor(key: Key) {
        this.key = key;
    }
    public getKey(){
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log(`Person has entered the house.`);
        } else {
            console.log("The door is closed. Can't come in.");
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Door opened.");
        } else {
            console.log("Wrong key, door remains closed.");
        }
    }
}




const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};