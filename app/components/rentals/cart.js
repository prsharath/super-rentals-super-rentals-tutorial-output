import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';


export default class CartComponent extends Component {

  @tracked grandTotal;
    get results() {
      let { rentals } = this.args;
      let total=0;
      rentals.forEach(element => {
        total+=element.total;
      });

      this.grandTotal = total;
      return rentals;
    }
    
}
