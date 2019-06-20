import { combineReducers } from 'redux';
import ProductDetailReducer from './productDetailReducer';

//Application level state
const rootReducer = combineReducers({
  //product detail store is created by its reducer
  productDetail: ProductDetailReducer
});

export default rootReducer;



//Store Data is Like this:-
// let productDetail={
//   attributeSelection:{
//     colorSelection:"5aec58955a39460004b3f6d5",
//     storageSelection:"5aec58955a39460004b3f6d3"
//   },
//   options:{
//     color:[{
    //   "_id": "5aec58955a39460004b3f6d5",
    //   "attrib_id": "5aec58955a39460004b3f6d1",
    //   "name": "Black"
    // },
    // {
    //   "_id": "5aec58955a39460004b3f6d6",
    //   "attrib_id": "5aec58955a39460004b3f6d1",
    //   "name": "Gold"
    // }],
//     storage:[{
    //   "_id": "5aec58955a39460004b3f6d3",
    //   "attrib_id": "5aec58955a39460004b3f6d0",
    //   "name": "1.5GB"
    // },
    // {
    //   "_id": "5aec58955a39460004b3f6d4",
    //   "attrib_id": "5aec58955a39460004b3f6d0",
    //   "name": "2GB"
    // }]
//   },
//   productVariation:[
  //   {
  //     "_id": "5aec58965a39460004b3f6dd",
  //     "images": [
  //       "https://assignment-appstreet.herokuapp.com/sam_1.5gb_black_1.jpg",
  //       "https://assignment-appstreet.herokuapp.com/sam_1.5gb_black_2.jpg"
  //     ],
  //     "mark_price": 30000,
  //     "name": "Samsung Galaxy A8+ (1.5GB, Black)",
  //     "sale_msg": "10% Off",
  //     "sale_price": 27000,
  //     "sign": [
  //       "5aec58955a39460004b3f6d3",
  //       "5aec58955a39460004b3f6d5"
  //     ]
  //   },
  //   {
  //     "_id": "5aec58965a39460004b3f6de",
  //     "images": [
  //       "https://assignment-appstreet.herokuapp.com/sam_1.5gb_gold.jpg"
  //     ],
  //     "mark_price": 30180,
  //     "name": "Samsung Galaxy A8+ (1.5GB, Gold)",
  //     "sale_msg": "10% Off",
  //     "sale_price": 27162,
  //     "sign": [
  //       "5aec58955a39460004b3f6d3",
  //       "5aec58955a39460004b3f6d6"
  //     ]
  //   },
  //   {
  //     "_id": "5aec58965a39460004b3f6df",
  //     "images": [
  //       "https://assignment-appstreet.herokuapp.com/sam_2gb_black_1.jpg",
  //       "https://assignment-appstreet.herokuapp.com/sam_2gb_black_2.jpg"
  //     ],
  //     "mark_price": 30360,
  //     "name": "Samsung Galaxy A8+ (2GB, Black)",
  //     "sale_msg": "10% Off",
  //     "sale_price": 27324,
  //     "sign": [
  //       "5aec58955a39460004b3f6d4",
  //       "5aec58955a39460004b3f6d5"
  //     ]
  //   },
  //   {
  //     "_id": "5aec58965a39460004b3f6e0",
  //     "images": [
  //       "https://assignment-appstreet.herokuapp.com/sam_2gb_gold_1.jpg",
  //       "https://assignment-appstreet.herokuapp.com/sam_2gb_gold_2.jpg"
  //     ],
  //     "mark_price": 30540,
  //     "name": "Samsung Galaxy A8+ (2GB, Gold)",
  //     "sale_msg": "10% Off",
  //     "sale_price": 27486,
  //     "sign": [
  //       "5aec58955a39460004b3f6d4",
  //       "5aec58955a39460004b3f6d6"
  //     ]
  //   }
  // ],
//   product_details:{},
// }