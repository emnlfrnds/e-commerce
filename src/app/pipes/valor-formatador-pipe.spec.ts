import { valorFormatadoPipe } from './valor-formatado-pipe';

describe('pipe', () => {
  it('create an instance', () => {
    const pipe = new valorFormatadoPipe();
    expect(pipe).toBeTruthy();
  });
});
