import tasksReducer, { addTask } from '../../store/tasksSlice';

describe('tasks reducer', () => {
  it('should handle initial state', () => {
    expect(tasksReducer(undefined, { type: 'unknown' })).toEqual({ tasks: [] });
  });

  it('should handle adding a task', () => {
    const initialState = { tasks: [] };
    const actual = tasksReducer(initialState, addTask('Test Task'));
    expect(actual.tasks.length).toEqual(1);
    expect(actual.tasks[0].description).toEqual('Test Task');
  });
});
