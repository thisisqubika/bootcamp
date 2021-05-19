import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

export const renderComponent = ({ store, component }) => (
  render(
    <Provider store={store}>{component}</Provider>
  )
);
