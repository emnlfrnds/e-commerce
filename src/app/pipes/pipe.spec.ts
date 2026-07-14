import { valorFormatadoPipe } from './pipe';

describe('pipe', () => {
  it('create an instance', () => {
    const pipe = new valorFormatadoPipe();
    expect(pipe).toBeTruthy();
  });
});
