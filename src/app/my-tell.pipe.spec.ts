import { MyTellPipe } from './my-tell.pipe';

describe('MyTellPipe', () => {
  it('create an instance', () => {
    const pipe = new MyTellPipe();
    expect(pipe).toBeTruthy();
  });

  it('Testing Cheap', () => {
    const pipe = new MyTellPipe();
    expect(pipe.transform(10000,'intexaquacraze')).toBe('intexaquacraze Cheap');
  });

  it('Testing Expensive', () => {
    const pipe = new MyTellPipe();
    expect(pipe.transform(34000,'ipad')).toBe('Ipad Expensive');
    
  });

});
