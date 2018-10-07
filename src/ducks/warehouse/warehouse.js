import { createReducer, createAction } from 'redux-act';
import * as app from '../app';
import { message, notification } from 'antd';
import api from '../../api';

export const REDUCER = 'warehouse'
const NS = `@@${REDUCER}/`


let data_temp = [{
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

export const getWarehouseDetails = (name) => (dispatch,getState) => {
    dispatch(app.setLoading(true));
    message.success('Warehouse details :' + name);
    dispatch(app.setLoading(false));
}

export const addWarehouse = () => (dispatch,getState) => {
  dispatch(app.setLoading(true));
  message.info('Warehouse add new');
  dispatch(app.setLoading(false));
}

export const getWarehouseList = () => (dispatch, getState) => {
  dispatch(app.setLoading(true));
   
  api.warehouse.list().then( (response) => {
    dispatch(fetchWarehouseList(response.data));
  })
  .then(dispatch(app.setLoading(false)))
  .catch(err => {
    console.log('Fetch warehouse error : ', err);
    message.error('Error fetching warehouse data ' + err);    
  })
}

const initialState = { 
  list : []
}
export default createReducer({
  [fetchWarehouseList]: (state, warehouseList) => {
    return { ...state, ...state.list, list : warehouseList}
  },
}, initialState)
