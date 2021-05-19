import { screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { renderComponent } from './utils/tests';
import App from './App';

describe('App', () => {
  const initialState = {
    counter: { count: 0 },
    lessons: { lessons: [] }
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it('should render Bienvenido al curso', () => {
    renderComponent({ store, component: <App /> });
    const welcome = screen.getByText(/Bienvenido al curso/i);
    expect(welcome).toBeInTheDocument();
  });
});
