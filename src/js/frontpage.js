import md from './lib.js';

let mg = new md(document, window);

((doc, wnd) => {

  const idom = mg.findElement('#root-element');
  if (!idom) {
    throw new Error('Root element not found')
  }

  wnd.onpopstate = () => {
    console.log('History changed');
    checkState();
  };

  const lbtn = mg.findElement('.login-button');
  if (lbtn) {
    mg.onEvent(lbtn, 'click', () => {
      wnd.history.pushState({}, null, '/account.html');
      checkState();
    });
  }

  const rbtn = mg.findElement('.registration-button');
  if (rbtn) {
    mg.onEvent(rbtn, 'click', () => {
      wnd.history.pushState({}, null, '/register.html');
      checkState();
    });
  }

  const checkState = () => {
    const current = doc.location.pathname;
    switch (current) {
      case '/account.html':
        mg.unhide(['.container-account-details']);
        mg.hide(['.container-login-form', '.container-registration-form']);
        break;
      case '/register.html':
        mg.unhide(['.container-registration-form']);
        mg.hide(['.container-account-details', '.container-login-form']);
        break;
      default:
        mg.unhide(['.container-login-form']);
        mg.hide(['.container-registration-form', '.container-account-details']);
        break;
    }
  }

  checkState();

})(document, window);
