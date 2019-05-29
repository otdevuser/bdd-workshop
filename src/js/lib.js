
const md = function(doc, wnd) {

  this.doc = doc;
  this.wnd = wnd;

  this.findElement = (cssSelector) => this.doc.querySelector(cssSelector);

  this.onEvent = (element, fireEvent, callback, options) => {
    if (element instanceof EventTarget) {
      element.addEventListener(fireEvent, callback, options);
    }
    return this;
  }

  this.triggerEvent = (element, fireEvent) => {
    if (element instanceof EventTarget) {
      element.dispatchEvent(fireEvent);
    }
    return this;
  }

  this.unEvent = (element, fireEvent, callback) => {
    if (element instanceof EventTarget) {
      element.removeEventListener(fireEvent, callback);
    }
    return this;
  }

  this.hide = (selectors) => {
    selectors.map((elem) => {
      this.doc.querySelector(elem).style.display = 'none';
    });
    return this;
  }

  this.unhide = (selectors) => {
    selectors.map((elem) => {
      this.doc.querySelector(elem).style.display = '';
    });
    return this;
  }
};

module.exports = md;
