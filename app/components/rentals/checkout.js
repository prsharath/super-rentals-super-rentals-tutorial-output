import Component from '@glimmer/component';

export default class CheckoutComponent extends Component {

  get grandTotal() {
    let { rentals } = this.args;
    let total = 0;
    rentals.forEach(element => {
      total += element.total;
    });

    return total;
  }

}
