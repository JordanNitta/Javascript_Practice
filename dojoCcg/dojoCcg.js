class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        this.res -= this.power
    }
}

class Effect extends Card {
    constructor(text, magnitude, stat, name, cost) {
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }
    
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat == res)
            target.res +=3;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


const RedBeltNinja = new Unit("Red Belt Ninja")
const hardAlgortihm = new Effect("increase target's resilience by 3", 3, "resilience", "Hard Algorithm", 2)