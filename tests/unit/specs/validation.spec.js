const Validation = require('../../../src/js/validation');

describe('Validation', () => {

  let inst;

  describe('isEmptyString', () => {

    beforeEach(() => {
      inst = new Validation();
    });

    it('should pass when string is empty', () => {
      expect(inst.isEmptyString('')).toEqual(true);
    });

    it('should fail when string is not empty', () => {
      expect(inst.isEmptyString('s')).toEqual(false);
    });

  });

  describe('lengthMatches', () => {

    beforeEach(() => {
      inst = new Validation();
    });

    it('should pass for length 14 with range 0 - 14', () => {
      expect(inst.lengthMatches('12345678901234', 0, 14)).toEqual(true);
    });

    it('should fail for length 14 with range 0 - 13', () => {
      expect(inst.lengthMatches('12345678901234', 0, 13)).toEqual(false);
    });

    it('should pass for length 8 with range 8 - 12', () => {
      expect(inst.lengthMatches('12345678', 8, 12)).toEqual(true);
    });

    it('should fail for length 7 with range 8 - 12', () => {
      expect(inst.lengthMatches('1234567', 8, 12)).toEqual(false);
    });

    it('should pass for length 10 with range 8 - ...', () => {
      expect(inst.lengthMatches('1234567890', 8)).toEqual(true);
    });

    it('should pass for length 1 with range not defined', () => {
      expect(inst.lengthMatches('1')).toEqual(true);
    });

    it('should fail for length 0 with range not defined', () => {
      expect(inst.lengthMatches('')).toEqual(false);
    });

    it('should pass for length 0 with range 0 - ...', () => {
      expect(inst.lengthMatches('', 0)).toEqual(true);
    });

    it('should throw Error when range min value si greater than max', () => {
      expect(() => { inst.lengthMatches('1', 5, 4); }).toThrowError();
    });

  });

  describe('isFullName', () => {

    beforeEach(() => {
      inst = new Validation();
    });

    it('should pass for value "John Doe"', () => {
      expect(inst.isFullName('John Doe')).toEqual(true);
    });

    it('should pass for value "John Doe II"', () => {
      expect(inst.isFullName('John Doe II')).toEqual(true);
    });

    it('should fail for value "JohnDoe"', () => {
      expect(inst.isFullName('JohnDoe')).toEqual(false);
    });

    it('should fail for value "John "', () => {
      expect(inst.isFullName('John ')).toEqual(false);
    });

    it('should fail for value "John  "', () => {
      expect(inst.isFullName('John  ')).toEqual(false);
    });

  });

});
