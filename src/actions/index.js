import axios from 'axios';
import {ATTRIBUTE_SELECTION,PRODUCT_VARIATION,PRODUCT_OPTIONS, SELECTED_PRODUCT,SELECTED_ATTRIBUTE,ERROR} from './types';

export const productDetailFetch = (callback) => (dispatch)=>{   
    axios.get("https://assignment-appstreet.herokuapp.com/api/v1/products/5aec58965a39460004b3f6dd").then(response=>{
        dispatch({ type: ATTRIBUTE_SELECTION, payload: {attributes:response.data.attributes,options:response.data.options} });
        dispatch({ type: PRODUCT_VARIATION, payload: response.data.product_variations} );
        dispatch({ type: PRODUCT_OPTIONS, payload: {attributes:response.data.attributes,options:response.data.options} });
        dispatch({ type: SELECTED_PRODUCT, payload:response.data});
    }, err => dispatch({ type: ERROR, payload: err }));
}

export const setSelectedAttribute=(key,id)=>{
    return {
        type:SELECTED_ATTRIBUTE,
        payload:{key,id}
    }
}
