import { combineReducers } from 'redux';
import ProductDetailReducer from './productDetailReducer';

//Application level state
const rootReducer = combineReducers({
  //product detail store is created by its reducer
  productDetail: ProductDetailReducer
});

export default rootReducer;
