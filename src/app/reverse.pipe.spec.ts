import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the name in reverse', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('Nicolas')).toBe('salociN');
    expect(pipe.transform('Ana')).toBe('anA');
    expect(pipe.transform('Zulema')).toBe('ameluZ');
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
  });
});
