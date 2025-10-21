class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (!model || storage < 0 || price < 0 || !condition) {
            throw new Error("Invalid smartphone!");
        }

        this.availableSmartphones.push({ model, storage, price, condition });
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const found = this.availableSmartphones.find(p => p.model === model);
        if (!found) throw new Error(`${model} was not found!`);

        let soldPrice = found.price;
        if (found.storage < desiredStorage) {
            const diff = desiredStorage - found.storage;
            soldPrice = diff <= 128 ? found.price * 0.9 : found.price * 0.8;
        }

        this.soldSmartphones.push({ model, storage: found.storage, soldPrice });
        this.revenue += soldPrice;
        this.availableSmartphones = this.availableSmartphones.filter(p => p.model !== model);

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        this.availableSmartphones.forEach(p => p.storage *= 2);

        const result = ["Upgraded Smartphones:"];
        this.availableSmartphones.forEach(p => {
            result.push(`${p.model} / ${p.storage} GB / ${p.condition} condition / ${p.price.toFixed(2)}$`);
        });
        return result.join("\n");
    }

    salesJournal(criteria) {
        if (criteria !== "storage" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }

        if (criteria === "storage") {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }

        const result = [];
        result.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldSmartphones.length} smartphones sold:`);

        this.soldSmartphones.forEach(p => {
            result.push(`${p.model} / ${p.storage} GB / ${p.soldPrice.toFixed(2)}$`);
        });

        return result.join("\n");
    }
}
