import { createReducer, createAction } from 'redux-act'
import * as app from '../app'
import { message, notification } from 'antd'

export const REDUCER = 'warehouse'
const NS = `@@${REDUCER}/`


let data = [{
  id : 1,
  status : 0,
  name : "warehouse main HQ",
  platform : "bask"
},{
  id : 2,
  status : 0,
  name : "warehouse north",
  platform : "bek"
}];

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

export const getWarehouseList = () => (
  dispatch : Function,
  getState : Function
) => {
  dispatch(app.setLoading(true));
  setTimeout( () =>{
    message.info('Warehouse fetch list');
    dispatch(fetchWarehouseList({data}));
    dispatch(app.setLoading(false));
   }, 3000)
}

const initialState = {}
export default createReducer({
  [fetchWarehouseList]: (state, warehouseList) => {
    return { ...state, list : warehouseList.data }
  },
}, initialState)
