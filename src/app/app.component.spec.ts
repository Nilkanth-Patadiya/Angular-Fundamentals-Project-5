/*import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MyFifthProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MyFifthProject');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('MyFifthProject app is running!');
  });
});*/

import { AppComponent } from "./app.component";

let ac;
beforeEach(()=>{
  ac=new AppComponent;
  console.log("Beforeeach called")
})
afterEach(()=>{
  ac=null;
  console.log("afterEach called")
})


describe('Testing Add Function',()=>{
  it('Two positives',()=>{
    
    let R=ac.Add(220,3);
    expect(R).toBe(223);
  });
  it('One positive One Negative',()=>{
    
    let R=ac.Add(2,-3);
    expect(R).toBe(-1);
  });
  it('One Negative One positive ',()=>{
    
    let R=ac.Add(-2,3);
    expect(R).toBe(1);
  });
  it('Two negatives',()=>{
    
    let R=ac.Add(-2,-3);
    expect(R).toBe(-5);
  });
  it('Two zeroes',()=>{
    
    let R=ac.Add(0,0);
    expect(R).toBe(0);
  });
  it('One Negative One zero ',()=>{
    
    let R=ac.Add(-2,0);
    expect(R).toBe(-2);
  });
  it('One zero One Negative ',()=>{
    
    let R=ac.Add(0,-3);
    expect(R).toBe(-3);
  });
  it('One positive One zero',()=>{
    
    let R=ac.Add(2,0);
    expect(R).toBe(2);
  });
  it('One zero One positive ',()=>{
    
    let R=ac.Add(0,3);
    expect(R).toBe(3);
  });

});
