import { createStore } from 'redux';

export default reducers => {
  const enhancer = process.env.NODE_ENV === 'development';
  return createStore(reducers, enhancer);
};
