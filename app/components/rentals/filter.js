import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {

  get results() {
    let { rentals, query, selectedSort } = this.args;
    let queryLower = query.toLowerCase();

    if (queryLower) {
      rentals = rentals.filter((rental) => rental.title.toLowerCase().includes(queryLower)
        || rental.city.toLowerCase().includes(queryLower));

    }

    if (selectedSort == 'A To Z') {
      return rentals.sortBy('title');
    }
    else {
      return rentals.sortBy('title').reverse();
    }
  }

}
