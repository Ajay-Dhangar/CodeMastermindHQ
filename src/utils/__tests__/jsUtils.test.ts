import {toggleListItem} from '../jsUtils';

describe('toggleListItem', () => {
  it('removes item already in list', () => {
    expect(toggleListItem([1, 2, 3], 2)).toEqual([1, 3]);
  });
  it('appends item not in list', () => {
    expect(toggleListItem([1, 2], 3)).toEqual([1, 2, 3]);
  });
});
