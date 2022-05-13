import { screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { renderComponent } from '../../utils/tests';
import { DisplayCount } from '.';

describe('DisplayCount', () => {
  const initialState = {
    counter: { count: 0 },
    lessons: { lessons: [] }
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it('should render two buttons', () => {
    renderComponent({ store, component: <DisplayCount /> });
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);
    expect(buttons).toHaveLength(2);
  });

  it('should render increment button', () => {
    renderComponent({ store, component: <DisplayCount /> });
    const increment = screen.getByText(/Increment!/i);
    expect(increment).toBeInTheDocument();
    expect(increment).not.toBeDisabled();
  });

  it('should render decrement button', () => {
    renderComponent({ store, component: <DisplayCount /> });
    const decrement = screen.getByText(/Decrement!/i);
    expect(decrement).toBeInTheDocument();
  });
});
