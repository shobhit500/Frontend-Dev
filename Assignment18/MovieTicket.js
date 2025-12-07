// MOVIE TICKET BOOKING SYSTEM
// Base class: MovieTicket
class MovieTicket {
constructor(movieName, seatNo, price) {
this.movieName = movieName;
this.seatNo = seatNo;
this.price = price;
}
}

// Add method to prototype
MovieTicket.prototype.printTicket = function() {
console.log(`Ticket Details:
Movie: ${this.movieName}
Seat No: ${this.seatNo}
Price: ₹${this.price}`);
};

// Derived class: OnlineTicket
class OnlineTicket extends MovieTicket {
constructor(movieName, seatNo, price, convenienceFee) {
super(movieName, seatNo, price); // Call parent constructor
this.convenienceFee = convenienceFee;
}

// Method to get total amount
getTotalAmount() {
return this.price + this.convenienceFee;
}
}

// -------------------------------
// DEMONSTRATION
// -------------------------------

const ticket1 = new OnlineTicket("Avatar 3", "A10", 300, 50);
const ticket2 = new OnlineTicket("Inception", "B5", 250, 30);

// Call prototype method from OnlineTicket objects
ticket1.printTicket();
console.log("Total Amount (including convenience fee): ₹" + ticket1.getTotalAmount());

console.log("\n");

ticket2.printTicket();
console.log("Total Amount (including convenience fee): ₹" + ticket2.getTotalAmount());
