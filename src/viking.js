// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength; 
    }
        
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}


// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
    super(health, strength); }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy =[];
        this.saxonArmy =[];
    }
    
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
       let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
       let saxonDamaged = this.saxonArmy[saxonIndex];

       let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
       let vikingAttacker = this.vikingArmy[vikingIndex];

       let result = saxonDamaged.receiveDamage(vikingAttacker.attack());

       if (saxonDamaged.health <= 0) this.saxonArmy.splice(saxonIndex, 1)
        
       return result;
    }

    saxonAttack() {
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingDamaged = this.vikingArmy[vikingIndex];

        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonAttacker = this.saxonArmy[saxonIndex];

        let result = vikingDamaged.receiveDamage(saxonAttacker.attack());

        if (vikingDamaged.health <= 0) this.vikingArmy.splice(vikingIndex, 1);

        return result;
    }

    showStatus() {
        if (!this.saxonArmy.length) return "Vikings have won the war of the century!"
        else if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
        else if (this.vikingArmy.concat.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
    }
}
