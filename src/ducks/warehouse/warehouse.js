import { createReducer, createAction } from 'redux-act'
import * as app from '../app'
import { message, notification } from 'antd'

export const REDUCER = 'warehouse'
const NS = `@@${REDUCER}/`

export const fetchWarehouseList = createAction(`${NS}FETCH_WAREHOUSELIST`);

export const getWarehouseDetails = (name) => (
  dispatch: Function,
  getState: Function,
) => {
    dispatch(app.setLoading(true));
    message.success('Warehouse details :' + name);
    dispatch(app.setLoading(false));
}

export const addWarehouse = () => (
  dispatch: Function,
  getState: Function,
) => {
  dispatch(app.setLoading(true));
  message.info('Warehouse add new');
  dispatch(app.setLoading(false));
}

const initialState = {}
export default createReducer({

}, initialState)
