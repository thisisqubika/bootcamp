import { createSlice } from '@reduxjs/toolkit';

const toggleLessonStatus = ({ lessons }, payload) => {
  const newLessons = lessons.map(({ title, status }) => {
    let newStatus = status;
    if (title === payload) {
      newStatus = status === 'PENDING' ? 'COMPLETED' : 'PENDING';
    }
    return ({ title, status: newStatus });
  });
  return ({ lessons: newLessons });
};

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: {
    lessons: [
      { title: 'Git', status: 'PENDING' },
      { title: 'HTML', status: 'PENDING' },
      { title: 'CSS', status: 'PENDING' },
      { title: 'Javascript', status: 'PENDING' },
      { title: 'React', status: 'PENDING' },
      { title: 'Redux', status: 'PENDING' },
      { title: 'Jest', status: 'PENDING' },
    ],
  },
  reducers: {
    toggleStatus: (state, action) => toggleLessonStatus(state, action.payload)
  }
});

export const {
  toggleStatus
} = lessonsSlice.actions;

export default lessonsSlice.reducer;
