function solve(lines, criteria){
    class Ticket{
    constructor(destination, price, status){
        this.destination = destination;
        this.price = +price;
        this.status = status;
    }
}
let tickets = [];
lines.forEach(line => {
    let[destination, price, status] = line.split('|');
let ticket = new Ticket(destination, price, status);
tickets.push(ticket);
});

let sorter = {
    'destination':(a, b) => a.destination.localeCompare(b.destination),
    'price': (a, b) => a.price - b.price,
    'status': (a, b) => a.status.localeCompare(b.status)
}


return tickets.sort(sorter[criteria]);

}

let result = solve([
'New York City|95.99|available',
'New York City|195.99|sold',
'Boston|126.20|departed',
'Philadelphia|94.20|available'],
'status'
);

console.log(result);

