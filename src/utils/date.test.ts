import {dateFormatLong, dateFormatShort} from './date';

describe('DATE', () => {
  describe('dateFormatLong', () => {
    it('should return a string', () => {
      expect(dateFormatLong('2018-01-01')).toBe('Comprado el 1 de enero, 2018');
    });
    it('should return error because bad format date', () => {
      expect(() => dateFormatLong('2018-01-301')).toThrow('Invalid time value');
    });
  });
  describe('dateFormatShort', () => {
    it('should return a string', () => {
      expect(dateFormatShort('2018-01-01')).toBe('1 de Enero, 2018');
    });
    it('should return error because bad format date', () => {
      expect(() => dateFormatShort('2018-01-301')).toThrow(
        'Invalid time value',
      );
    });
  });
});
