import { screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { renderComponent } from '../../utils/tests';
import { Counter } from '.';

describe('Counter', () => {
  const initialState = {
    counter: { count: 5 },
    lessons: { lessons: [] }
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it('should render the counting', () => {
    renderComponent({ store, component: <Counter /> });
    const clicked = screen.getByText(/You clicked 5 times/i);
    expect(clicked).toBeInTheDocument();
  });
});

