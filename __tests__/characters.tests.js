import { TestScheduler } from 'jest';
import {Character} from '../src/js/horror.js';

describe('Character', () => {
  test('should create a character object', () => {
    const player = new Character();
    expect(player).toBeInstanceOf(Character);
  });
})