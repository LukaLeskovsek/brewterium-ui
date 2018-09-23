import { createReducer } from 'redux-act'
import * as app from './app'
import { message, notification } from 'antd'
import { createAction } from '../../node_modules/redux-act/types';

export const REDUCER = 'warehouse'
const NS = `@@${REDUCER}/`

export const fetchWarehouseList = createAction(`${NS}FETCH_WAREHOUSELIST`);

export const getWarehouseDetails = ({warehouseId}) => (
  dispatch: Function,
  getState: Function,
) => {
    dispatch(app.setLoading(true));
    message.success('Warehouse details :' + warehouseId);
    dispatch(app.setLoading(false));
}

const initialState = {}
export default createReducer({

}, initialState)
