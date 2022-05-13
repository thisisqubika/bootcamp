import { screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { renderComponent } from '../../utils/tests';
import { Lessons } from '.';

describe('Lessons', () => {
  const initialState = {
    counter: { count: 0 },
    lessons: {
      lessons: [
        { title: 'lesson zero', status: 'PENDING' },
        { title: 'lesson one', status: 'PENDING' },
      ],
    }
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it('should render Lessons title', () => {
    renderComponent({ store, component: <Lessons /> });
    const lessons = screen.getByText(/Lessons:/i);
    expect(lessons).toBeInTheDocument();
  });

  it('should render two lessons', () => {
    renderComponent({ store, component: <Lessons /> });
    const lessonItems = screen.getAllByText((content) => content.startsWith('Lesson '));
    expect(lessonItems.length).toEqual(2);
    expect(lessonItems.length).not.toBeGreaterThan(10);
  });

  it('should render Lesson 0', () => {
    renderComponent({ store, component: <Lessons /> });
    const lesson0 = screen.getByText(/Lesson 0: lesson zero/i);
    expect(lesson0).toBeInTheDocument();
  });

  it('should render Lesson 1', () => {
    renderComponent({ store, component: <Lessons /> });
    const lesson1 = screen.getByText(/Lesson 1: lesson one/i);
    expect(lesson1).toBeInTheDocument();
  });

});

