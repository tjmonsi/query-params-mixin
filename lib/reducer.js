import { reducers, store, ReduxMixin } from '@littleq/state-manager';
import { combineReducers } from 'redux';

const QUERYPARAMS_ACTION = {
  UPDATE: 'QUERYPARAMS_UPDATE'
};

reducers.query = (query = {}, action) => {
  switch (action.type) {
    case QUERYPARAMS_ACTION.UPDATE:
      return Object.assign({}, query, {
        params: action.params
      });
    default:
      return query;
  }
};

store.replaceReducer(combineReducers(reducers));

export { QUERYPARAMS_ACTION };