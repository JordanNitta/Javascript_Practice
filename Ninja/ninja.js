class Ninja { 
    constructor(name, health, speed=3, strength= 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        return this
    }
    showStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank sake and gained 10hp Health: ${this.health} but he's very drunk `);
        return this;
    }
}
const ninja1 = new Ninja("Bob", 100, 20, 40);
ninja1.sayName().showStats().drinkSake().showStats();

console.log("-------------------------------------------")

class Sesai extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake()
        console.log(`What one programmer can do in one month, ${this.name} can do in two months`);
        return this
    }
}

const superSensai = new Sesai("Master Splinter");
superSensai.speakWisdom().showStats()
// console.log(superSensai);