import { valorFormatadoPipe } from './pipe';

describe('MeuPipePipe', () => {
  it('create an instance', () => {
    const pipe = new valorFormatadoPipe();
    expect(pipe).toBeTruthy();
  });
});
