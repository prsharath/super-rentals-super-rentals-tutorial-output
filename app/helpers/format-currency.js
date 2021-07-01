import Ember from 'ember';

export function formatCurrency([value, ...rest]) {

  let sign = '$';

  if (value) {
    value = value.toPrecision(5);

    return `${sign}${value}`;
  }

  return '$0.00';


}

export default Ember.Helper.helper(formatCurrency);