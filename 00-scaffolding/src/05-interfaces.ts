// Interfaces
console.log()
console.log("####################")
console.log("Interfaces")

interface Duck {
    quack(): void
}


function duck_processor(duck: Duck) {
    duck.quack()
}


let duck = {
    quack: function() {
        console.log("quacking")
    }
}

let dog = {
    woof: function() {
        console.log("woof")
    }
}

duck_processor(duck)
//duck_processor(dog)

// Containers
console.log()
console.log("####################")
console.log("Containers")
interface DuckWithId extends Duck {
    id: string
}

function duck_maker(id: string): DuckWithId {
    return {
        id : id,
        quack : function() {
            console.log("I am duck " + id + " quacking")
        }
    }
}

let ducks: DuckWithId[] = []

let duck1 = duck_maker("001")
let duck_bond = duck_maker("007")
let identity_less_duck = duck

ducks.push(duck1)
ducks.push(duck_bond)
// this will failed
//ducks.push(identity_less_duck)
ducks.forEach( (el) =>
    el.quack()
)

// readability
function first<T>(range: T[], p: (elem: T) => boolean): T | undefined {
    for (let t of range) {
        if (p(t)) {
            return t
        }
    }
    return undefined
}
let secretAgentDuck = first(ducks, (elem: DuckWithId) => elem.id == "007")
console.log(`The secret agent duck is ${secretAgentDuck}`)