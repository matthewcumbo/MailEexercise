import { TestBed } from '@angular/core/testing';

import { TestingService } from './testing.service';

describe('TestingService', () => {
  let service: TestingService;
  let numbers:number[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingService);
    numbers = [1,2,3,4,5];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 1 and 2', () => {
    let result = service.add(1,2);
    expect(result).toEqual(3);
  });

  it('should add 5 and 5', () => {
    let result = service.add(5,5);
    expect(result).toEqual(10);
  });

  it('should add a number to the list', () => {
    numbers.push(6);
    
    let result = service.insert(6);
    expect(result).toHaveSize(numbers.length);
  });

  it('should remove a number from the list', () => {
    numbers.pop();
    
    let result = service.remove();
    expect(result).toHaveSize(numbers.length);
  });
});
