import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CheckoutComponent extends Component {

  @service Checkout;
  // get grandTotal() {
  //   return this.Checkout.getTotal();
  // }

  @tracked grandTotal;

  get results() {
    let rentals = this.Checkout.getCart();
    this.grandTotal = this.Checkout.getTotal();
    return rentals;
  }

}
