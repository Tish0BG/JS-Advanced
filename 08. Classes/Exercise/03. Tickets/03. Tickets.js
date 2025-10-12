function ticketsStatistic(data, sortCriteria) {
    const result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sort(array, sortCriteria) {
            return array.sort((a, b) => {
                if (sortCriteria === "price") {
                    return a[sortCriteria] - b[sortCriteria];
                }
                return a[sortCriteria].localeCompare(b[sortCriteria]);
            })
        }
    }

    for (let line of data) {
        let [destination, price, status] = line.split('|');
        price = Number(price)
        const ticket = new Ticket (destination, price, status);
        result.push(ticket);
    }

    return Ticket.sort(result, sortCriteria);
}

console.log(ticketsStatistic(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));



ticketsStatistic(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');