import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class CheckoutService extends Service {

  @tracked bookings = A([]);

  addToCart(rental) {
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
      quantity: rental.quantity,
      total: rental.nightlyrate * rental.quantity,
    };

    let existingBooking = this.bookings.findBy('id', booking.id);

    if (existingBooking) {
      booking.quantity = parseInt(existingBooking.quantity) + parseInt(booking.quantity);
      booking.total = parseFloat(existingBooking.total) + parseFloat(booking.total);
      this.bookings.removeObject(existingBooking);
    }
      this.bookings.pushObject(booking);

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

  getTotal(){
    let total = 0;
    this.bookings.forEach(element => {
        total += element.total;
    });

    return total;
  }

  updateprice(item){
    let booking = this.bookings.findBy('id', item.id);

    booking.total = parseInt(item.quantity) * item.rental.nightlyrate;
  }


}
