const Provider = require('../../../src/js/provider');

describe('Provider', () => {

  let inst;

  beforeEach(() => {
    inst = new Provider();
  });

  it('provider setting should work', () => {
    inst.provider('dateService');
    expect(inst.provider()).toEqual('dateService');
  });

  it('set instance should work', () => {
    inst.instance(new Date());
    expect(inst.instance() instanceof Date).toEqual(true);
  });

});
