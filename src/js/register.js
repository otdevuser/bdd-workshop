import md from './lib';

((doc, wnd) => {

  const mg = new md(doc, wnd);

  const regOkBtn = mg.findElement('.register-action-button');
  if (regOkBtn) {
    mg.onEvent(regOkBtn, 'click', () => {
      console.log('Process registration clicked');
    });
  }

  const regCancelBtn = mg.findElement('.register-cancel-button');
  if (regCancelBtn) {
    mg.onEvent(regCancelBtn, 'click', () => {
      wnd.history.pushState({}, null, '/');
      const popStateEvent = new PopStateEvent('popstate', { state: null });
      mg.triggerEvent(wnd, popStateEvent);
    });
  }

})(document, window);
