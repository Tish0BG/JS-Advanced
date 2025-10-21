class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
        this.numberOfRoomTypes = 0;
    }

    restockSupplies(supplies) {
        const addedSupplies = [];

        for (let line of supplies) {
            let [supply, quantity, totalPrice] = line.split(" ");
            quantity = Number(quantity);
            totalPrice = Number(totalPrice);

            if (totalPrice <= this.initialBudget) {
                if (!this.supplyStock[supply]) {
                    this.supplyStock[supply] = 0;
                }
                this.supplyStock[supply] += quantity;
                this.initialBudget -= totalPrice;
                addedSupplies.push(`Successfully stocked ${quantity} ${supply}`);
            } else {
                addedSupplies.push(`There was not enough money to restock ${quantity} ${supply}`);
            }
        }

        return addedSupplies.join("\n");
    };

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (!this.roomAvailability[roomType]) {
            this.roomAvailability[roomType] = {};

            for (let supply of neededSupplies) {
                const [name, quantity] = supply.split(" ");
                this.roomAvailability[roomType][name] = Number(quantity);
            };
            this.roomAvailability[roomType]["price"] = Number(pricePerNight);
            this.numberOfRoomTypes ++;

            return `Great idea! Now with the ${roomType}, we have ${this.numberOfRoomTypes} types of rooms available, any other ideas?`;
        } else {
            return `The ${roomType} is already available in our hotel, try something different.`
        };
    };

    showAvailableRooms() {
    if (this.numberOfRoomTypes === 0) {
        return "Our rooms are not ready yet, please come back later...";
    }
    const result = [];
    for (let [key, info] of Object.entries(this.roomAvailability)) {
        result.push(`${key} - $ ${info["price"]}`);
    }
    return result.join("\n");
};

    bookRoom(roomType) {
        if (!this.roomAvailability[roomType]) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        const neededSupplies = Object.entries(this.roomAvailability[roomType])
            .filter(([key]) => key !== "price");

        for (let [supply, neededQty] of neededSupplies) {
            const need = Number(neededQty);
            if (!this.supplyStock[supply] || this.supplyStock[supply] < need) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        for (let [supply, neededQty] of neededSupplies) {
            const need = Number(neededQty);
            this.supplyStock[supply] -= need;
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType]["price"]} per night.`;
    }
};


let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));