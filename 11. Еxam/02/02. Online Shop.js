class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const productObj = this.products.find(p => p.product === product);
        if (!productObj) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        if (productObj.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - productObj.quantity;
            productObj.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        const productObj = this.products.find(p => p.product === product);
        if (!productObj) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        productObj.quantity--;
        this.sales.push({ product, quantity: 1 });

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
        }

        const result = [];
        result.push(`You sold ${this.sales.length} products today!`);
        result.push("Products in the warehouse:");

        for (let p of this.products) {
            result.push(`${p.product}-${p.quantity} more left`);
        }

        return result.join("\n");
    }
}