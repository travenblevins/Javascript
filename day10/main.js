class teamMember {
    constructor () {
        this.team = []
    }
    addmember(member) {
        this.team.unshift(member)
    }

    displayMembers() {
        this.team.forEach (member => {
            member.displayInfo()
        })
    }
}



class player extends teamMember{
    constructor(name, position, skill) {
        super()
        this.name = name;
        this.position = position;
        this.skill = skill;

        // Private variables for speed and stamina
        let stamina = 30;
        let speed = 30;

        // Getter for stamina
        this.getStamina = function () {
            return stamina;
        };

        // Setter for stamina that multiplies the input by 2
        this.setStamina = function (val) {
            stamina = val * 2;
        };

        // Getter for speed
        this.getSpeed = function () {
            return speed;
        };

        // Setter for speed that multiplies the input by 2
        this.setSpeed = function (val) {
            speed = val * 2;
        };
    }

    // Method to display player's info
    displayInfo() {
        console.log(`Name: ${this.name}, Position: ${this.position}, Skill: ${this.skill}`);
        console.log(`Speed: ${this.getSpeed()}, Stamina: ${this.getStamina()}`);
    }
}



class goalKeeper extends player{
    constructor(name, skill, saves) {
        super(name, 'Goalkeeper', skill)
        this.saves = saves
    }

    makeSave () {
        console.log(`${this.name} saved another one so far he has ${this.saves + 1} saves`)
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Position: ${this.position}, Skill: ${this.skill}, Saves: ${this.saves}`)
        console.log(`${this.name} saved ${this.saves} goals`)
    }
}


const gabe = new goalKeeper('Gabe', 'Offense', 7)
const Jerry = new goalKeeper('Jerry', 'Offense', 3)

console.log(gabe.makeSave())

const team = new teamMember()

// team.addmember(gabe)
// team.addmember(Jerry)
// team.displayMembers()

