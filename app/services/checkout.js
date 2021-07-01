import { A } from '@ember/array';
import Service from '@ember/service';


export default class CheckoutService extends Service {

  bookings = A([]);

  addToCart(rental, quantity) {
    // var addedItem = this.items.filter(item => item.title == item.title)[0];
    // if (addedItem) {
    //   let existingQuantity = item.existingquantity;
    //   item.quantity = parseInt(item.quantity) + parseInt(existingQuantity);
    //   item.total = parseInt(item.quantity) * parseFloat(item.nightlyrate);
    //   this.items.removeObject(addedItem);
    // }

    // var existingItem = this.items.filter(itm=>itm.title == item.title)[0];
    //   if(existingItem){
    //     item.quantity = parseInt(item.quantity) + parseInt(item.existingquantity);
    //     item.total = parseInt(item.quantity) * parseFloat(existingItem.nightlyrate);
    //     this.items.removeObject(existingItem);
    //   }

    //booking object has an id, rental, quantity and total

    let booking;

    booking = {
      id: rental.id,
      rental: rental,
      quantity: quantity,
      total: rental.nightlyrate * quantity,
    };

    let existingBooking = this.bookings.findBy('id', booking.id);

    if (existingBooking) {
      existingBooking.quantity = existingBooking.quantity + booking.quantity;
      existingBooking.total = existingBooking.total + booking.total;
    } else {
      this.bookings.pushObject(booking);
    }
  }

  removeFromCart(booking) {
    this.bookings.removeObject(booking);
  }

  empty() {
    this.bookings.clear();
  }

  getCart() {
    return this.bookings;
  }

}
