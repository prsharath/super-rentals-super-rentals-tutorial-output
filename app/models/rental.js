import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  @attr title;
  @attr itemid;
  @attr owner;
  @attr city;
  @attr location;
  @attr category;
  @attr total;
  @attr image;
  @attr quantity;
  @attr bedrooms;
  @attr description;
  @attr nightlyrate;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
