// typescript is using structural, instead of nominal typing

let impulse: number = 100 // what measurement is this?

class PoundSeconds {
    val: number
    constructor(val: number) {
        this.val = val // should do some conversion from raw value
    }

    toString(): string {
       return `${this.val} pound seconds` 
    }
}

class NewtonSeconds {
    val: number
    constructor(val: number) {
        this.val = val // should do some conversion from raw value
    }

    toString(): string {
       return `${this.val} newton seconds` 
    }
}

let impulseInPoundSeconds: PoundSeconds = new PoundSeconds(100)
// let impulseInPoundSeconds2: PoundSeconds  = new NewtonSeconds(200)
console.log(`Impulse is ${impulseInPoundSeconds}`)