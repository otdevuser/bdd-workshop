
const Validation = function () {

  let that = this;

  this.isEmptyString = (value) => {
    return value === '';
  }

  this.lengthMatches = (value, min = 1, max = undefined) => {
    if (max && min > max) {
      throw new Error('Minimum length value cannot be greater than maximum');
    }
    const str = `${value}`;
    if ((max && str.length > max) || str.length < min) {
      return false;
    }
    return true;
  }

  this.isFullName = (value) => {
    const rge = new RegExp('^[a-zA-Z]+ (([a-zA-Z])?( )?[a-zA-Z]+)+$');
    return rge.test(value);
  }
}

module.exports = Validation;
