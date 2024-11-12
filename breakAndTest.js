// This class is due to return information to car owners
// it is based on the fuel they input
// this should return a message to the user based on the method that is called

class Fuel {
    constructor(fuelName, price, fuelType) {
        this.fuelName = fuelName;
        this.price = price;
        this.fuelType = fuelType;
    }


    getfuelPrice() {
        //retrieves the price of the fuel
        return this.price
    }

    getFuelDetails() {
        //returns the name, cost and type of the fuel
        return `${this.fuelName} costs ${this.getfuelPrice()} and is ${this.fuelType}`
        

    }
    
   getRecommendation() {
    //based on fuel type it recommends the user to switch fuel type
    if (this.fuelType == "Petrol"){
        return `Switch from ${this.fuelName} to LiamFuel`
    }
    else{
        return `Switch from ${this.fuelName} to Maxom`
    }
}

}

var fuel = new Fuel("Maxom", 11.90, "Petrol");
console.log(fuel.getFuelDetails()) 
console.log(fuel.getRecommendation())


