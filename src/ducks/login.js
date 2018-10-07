import { createReducer } from 'redux-act'
import * as app from './app'

export const REDUCER = 'login'

export const submit = ({ username, password }) => (dispatch,getState) => {
  dispatch(app.addSubmitForm(REDUCER))

  let isLoggined = app.login(username, password, dispatch)
 
  if (isLoggined) {
    dispatch(app.deleteSubmitForm(REDUCER))
  } else {
    dispatch(app.deleteSubmitForm(REDUCER));
  }
}

const initialState = {}
export default createReducer({}, initialState)
