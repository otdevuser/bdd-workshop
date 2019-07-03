const RegistrationController = require('../../../src/js/register');
const Provider = require('../../../src/js/provider');

describe('RegistrationController', () => {

  const wnd = {
    history: {
      pushState: () => {}
    }
  };

  describe('fields', () => {

    it('should match expected fields set', () => {
      const expectedFields = [
        'register-fullname',
        'register-username',
        'register-password',
        'register-password-confirm',
        'register-email'
      ];
      const inst = new RegistrationController(wnd);
      expect(inst.fields).toEqual(expectedFields);
    });

  });

  describe('provide', () => {

    let rc;

    beforeEach(() => {
      rc = new RegistrationController(wnd);
    });

    it('throws error on wrong instance', () => {
      expect(() => {
        rc.provide({});
      }).toThrow(new Error('Provider instance expected as a parameter'));
    });

    it('returns true on expected Porvider', () => {
      const pro = new Provider();
      pro.provider('domlib');
      pro.instance({});
      expect(rc.provide(pro)).toEqual(true);
    });

    it('returns false on unexpected Porvider', () => {
      const pro = new Provider();
      pro.provider('dummy');
      pro.instance({});
      expect(rc.provide(pro)).toEqual(false);
    });

  });

});
