
const Provider = function() {
  let _provider;
  let _inst;

  this.provider = (value) => {
    if (value) {
      _provider = value;
      return;
    }
    return _provider;
  }

  this.instance = (value) => {
    if (value) {
      _inst = value;
      return;
    }
    return _inst;
  }

}

module.exports = Provider;
