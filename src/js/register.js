const md = require('./lib');
const Validation = require('./validation');
const Provider = require('./provider');

const RegistrationController = function (wnd) {

  let services = {
    domlib: undefined,
    validation: undefined
  };

  this.fields = [
    'register-fullname',
    'register-username',
    'register-password',
    'register-password-confirm',
    'register-email',
  ];

  this.provide = (inst) => {
    if (!(inst instanceof Provider)) {
      throw new Error('Provider instance expected as a parameter');
    }
    if (inst.provider() in services) {
      services[inst.provider()] = inst.instance();
      return true;
    }
    return false;
  };

  this.validateEmpty = (fieldName) => {
    const fieldEl = services.domlib.findElement(`[name="${fieldName}"]`);
    if (fieldEl) {
      services.domlib.onEvent(fieldEl, 'blur', (event) => {
        const isEmpty = services.validation.isEmptyString(event.target.value);
        if (isEmpty && !fieldEl.classList.contains('error-field')) {
          fieldEl.classList.add('error-field');
        } else if (!isEmpty && fieldEl.classList.contains('error-field')) {
          fieldEl.classList.remove('error-field');
        }
      });
    }
  };

  this.postInitial = () => {

    this.fields.map((el) => {
      this.validateEmpty(el);
    });

    const regOkBtn = services.domlib.findElement('.register-action-button');
    if (regOkBtn) {
      services.domlib.onEvent(regOkBtn, 'click', () => {
        console.log('Process registration clicked');
      });
    }

    const regCancelBtn = services.domlib.findElement('.register-cancel-button');
    if (regCancelBtn) {
      services.domlib.onEvent(regCancelBtn, 'click', () => {
        wnd.history.pushState({}, null, '/');
        const popStateEvent = new PopStateEvent('popstate', { state: null });
        services.domlib.triggerEvent(wnd, popStateEvent);
      });
    }

    const fullNameField = services.domlib.findElement('[name="register-fullname"]');
    if (fullNameField) {
      services.domlib.onEvent(fullNameField, 'blur', (event) => {
        const value = event.target.value;
        if (value === '' && !fullNameField.classList.contains('error-field')) {
          fullNameField.classList.add('error-field');
        } else if (value !== '') {
          const isFullName = services.validation.isFullName(value);
          if (!isFullName && !fullNameField.classList.contains('error-field')) {
            fullNameField.classList.add('error-field');
          } else if (isFullName) {
            fullNameField.classList.remove('error-field');
          }
        }
      });
    };
  };
}

module.exports = RegistrationController;
