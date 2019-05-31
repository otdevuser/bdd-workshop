const { JSDOM, HTMLParagraphElement } = require('jsdom');
const md = require('../../../src/js/lib.js');

describe('Library', () => {

  let mg;
  let testDomRoot;

  beforeEach(() => {
    testDomRoot = new JSDOM(
      `<!DOCTYPE html>
      <html>
      <head><title>Testing DOM elements</title></head>
      <body>
      <p class="matchingSelector">Element: Paragraph</p>
      <a href="#">Link</a>
      </body>
      </html>`
    );
    global.EventTarget = testDomRoot.window.EventTarget;
    mg = new md(testDomRoot.window.document, testDomRoot.window);
  });

  /**
   * Test for HTMLElement instance if element fond on the page accordingly
   * to https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
   */
  it('findElement() returns HTML element when selector matches', () => {
    const result = mg.findElement('.matchingSelector');
    expect(result instanceof testDomRoot.window.HTMLElement)
      .toEqual(true);
  });

  /**
   * Test for returning NULL if DOM element is not found on the page accordingly
   * to https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
   */
  it('findElement() returns null when selector does not match', () => {
    const result = mg.findElement('.unMatchingSelector');
    expect(result).toEqual(null);
  });

  it('events are not assigned to non-event targets', () => {
    const el = {};
    mg.onEvent(el, 'click', () => {});
    mg.triggerEvent(el, new testDomRoot.window.Event('click'));
    mg.unEvent(el, 'click', () => {});
  });

  it('onEvent() attaches event to the element', () => {
    const el = mg.findElement('a');
    const spyFunc = spyOn(el, 'addEventListener').and.callThrough();
    mg.onEvent(el, 'click', () => {});
    mg.triggerEvent(el, new testDomRoot.window.Event('click'));
    expect(spyFunc).toHaveBeenCalled();
  });

  it('triggerEvent() dispatches event on the element', () => {
    const el = mg.findElement('a');
    const spyFunc = spyOn(el, 'dispatchEvent').and.callThrough();
    mg.triggerEvent(el, new testDomRoot.window.Event('click'));
    expect(spyFunc).toHaveBeenCalled();
  });

  it('unEvent() removes the event from the element', () => {
    const el = mg.findElement('a');
    const spyFunc = spyOn(el, 'removeEventListener').and.callThrough();
    mg.onEvent(el, 'click', () => {

    });
    mg.triggerEvent(el, new testDomRoot.window.Event('click'));
    mg.unEvent(el, 'click', () => {});
    expect(spyFunc).toHaveBeenCalled();
  });

  it('hide() changes element style display value to none', () => {
    const el = mg.findElement('.matchingSelector');
    expect(el.style.display).not.toEqual('none');
    mg.hide(['.matchingSelector']);
    expect(el.style.display).toEqual('none');
  });

  it('unhide() changes element style display value to none', () => {
    const el = mg.findElement('.matchingSelector');
    expect(el.style.display).not.toEqual('none');
    mg.hide(['.matchingSelector']);
    expect(el.style.display).toEqual('none');
    mg.unhide(['.matchingSelector']);
    expect(el.style.display).not.toEqual('none');
  });

});
