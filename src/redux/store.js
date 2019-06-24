import { createStore } from 'redux';
import { actions } from './reducers';

export const store = createStore(actions);