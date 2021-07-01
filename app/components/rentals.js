import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RentalsComponent extends Component {
  @tracked query = '';
  @tracked selectedSort = 'A To Z';
}
