interface Car {
    vroom(): void
}

let car: Car = {
    vroom: () => console.log("Vrooom")
}

car.vroom()

// car.flyToTheMoon = () => console.log("take off !!!")
// car.flyToTheMoon()