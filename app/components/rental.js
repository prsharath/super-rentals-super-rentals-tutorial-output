import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RentalComponent extends Component {
  @tracked quantity = 1;
  @service Checkout;

  // @action
  // addToCart() {
  //   //for(let i=0;i<this.quantity;i++){
  //   this.args.rental.existingquantity = this.args.rental.quantity;
  //   this.args.rental.quantity = this.quantity;
  //   this.args.rental.total = this.args.rental.nightlyrate * this.quantity;
  //   this.Checkout.addToCart(this.args.rental);
  //   // }

  // }

  @action
  addToCart() {    
    this.Checkout.addToCart(this.args.rental, this.quantity);
  }


}
