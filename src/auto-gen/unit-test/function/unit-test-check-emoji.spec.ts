import { isEmoji } from '../../utils/helper';
describe('isEmoji', () => {
  it('should return true for a single emoji', () => {
    expect(isEmoji('😊')).toBe(true);
    expect(isEmoji('❤️')).toBe(true);
    expect(isEmoji('👍')).toBe(true);
  });

  it('should return true for a string with multiple emojis', () => {
    expect(isEmoji('😊😊')).toBe(true);
    expect(isEmoji('👍❤️')).toBe(true);
  });

  it('should return false for plain text', () => {
    expect(isEmoji('hello')).toBe(false);
    expect(isEmoji('123')).toBe(false);
  });

  it('should ignore spaces and return true for emoji with spaces around', () => {
    expect(isEmoji(' 😊 ')).toBe(true);
    expect(isEmoji('\t👍\n')).toBe(true);
  });

  it('should return true for complex emoji like flags or ZWJ sequences', () => {
    expect(isEmoji('👨‍👩‍👧‍👦')).toBe(true);
    expect(isEmoji('👩🏽‍🚀')).toBe(true);
  });

  it('should return false for empty string or only whitespace', () => {
    expect(isEmoji('')).toBe(false);
    expect(isEmoji('   ')).toBe(false);
  });
});
