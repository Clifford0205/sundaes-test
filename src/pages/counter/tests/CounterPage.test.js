import { useCounter } from '../useCounter';
import { act, renderHook } from '@testing-library/react-hooks';

describe('counter', () => {
  it('incretments count by 1', () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('decrements count by 1', () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
