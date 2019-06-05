const md = require('./lib');

const RegistrationController = function (doc, wnd) {

  let mg = new md(doc, wnd);

  this.fields = [
    'register-fullname',
    'register-username',
    'register-password',
    'register-password-confirm',
    'register-email',
  ];

  this.provideLibrary = (inst) => {
    if (inst instanceof md) {
      mg = inst;
    } else {
      throw new Error(
        'Library instance does not match for RegistrationController'
      );
    }
  }

  this.validateEmpty = (fieldName) => {
    const fieldEl = mg.findElement(`[name="${fieldName}"]`);
    if (fieldEl) {
      mg.onEvent(fieldEl, 'blur', (event) => {
        const value = event.target.value;
        if (value === '' && !fieldEl.classList.contains('error-field')) {
          fieldEl.classList.add('error-field');
        } else if (value !== '' && fieldEl.classList.contains('error-field')) {
          fieldEl.classList.remove('error-field');
        }
      });
    }
  }

  this.fields.map((el) => {
    this.validateEmpty(el);
  });

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

  const fullNameField = mg.findElement('[name="register-fullname"]');
  if (fullNameField) {
    mg.onEvent(fullNameField, 'blur', (event) => {
      const value = event.target.value;
      if (value === '' && !fullNameField.classList.contains('error-field')) {
        fullNameField.classList.add('error-field');
      } else if (value !== '' && fullNameField.classList.contains('error-field')) {
        fullNameField.classList.remove('error-field');
      }
    });
  }
}

module.exports = RegistrationController;
