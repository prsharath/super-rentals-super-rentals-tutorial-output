import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CheckoutsComponent extends Component {

    @service Checkout;

    get rentals() {
        return this.Checkout.getCart();
    }

    @action
    removeFromCart(rental) {
        // Only when assigning the action to an inline handler, the event object
        // is passed to the action as the first parameter.
        this.Checkout.removeFromCart(rental);
    }


}