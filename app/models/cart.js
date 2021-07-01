import Model, { attr } from '@ember-data/model';


export default class CartModel extends Model {
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr category;
  @attr quantity;
  @attr total;
  @attr description;
  @attr nightlyrate;
  @attr bedrooms;
  @attr type;
  @attr image;
}
