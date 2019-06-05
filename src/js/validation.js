
const validation = function () {

  let that = this;

  this.isEmpty = (value) => {

  }

  this.isEmail = (value) => {

  }

  this.lengthMatches = (value, min, max) => {
    if (min > max) {
      throw new Error('Minimum length value cannot be greater than maximum');
    }
    // Convert value to string. Omitting string templating `` for security
    const str = "" + value;
    if (str.length > max || str.length < min) {
      return false;
    }
    return true;
  }
}

module.exports = validation;
