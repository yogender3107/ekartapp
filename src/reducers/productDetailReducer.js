import { ATTRIBUTE_SELECTION, ERROR, PRODUCT_OPTIONS, SELECTED_PRODUCT, PRODUCT_VARIATION, SELECTED_ATTRIBUTE } from "../actions/types";
import {updateProductDetail,getAttributeID} from '../utility/utility';

//Reducer for product detail Page
export default function (state={}, action){
    //variable declared
    let storageAttID;
    let colorAttID;
    let selectedItem;
    let product_details;
    //selection on the base of type of action
    switch(action.type){
        // Attribute Sellection type is used store the default attribute selection (storage and color)
        case ATTRIBUTE_SELECTION:
            storageAttID=getAttributeID(action.payload.attributes,'Storage');
            colorAttID=getAttributeID(action.payload.attributes,'Colour');
            selectedItem={};
                
            for(let opt of action.payload.options){
                if(opt.attrib_id===storageAttID){
                    selectedItem.storageSelection=opt._id;
                    storageAttID="";
                }
                if(opt.attrib_id===colorAttID){
                    selectedItem.colorSelection=opt._id;
                    colorAttID="";
                }
            }
            return {attributeSelection:selectedItem,...state};

        //Product Options is used to store (Array) the attributes based on their type(Ex: Storage and color)
        case PRODUCT_OPTIONS:
            storageAttID=getAttributeID(action.payload.attributes,'Storage');
            colorAttID=getAttributeID(action.payload.attributes,'Colour');
            let options={};        
                for(let opt of action.payload.options){
                    if(opt.attrib_id===storageAttID){
                        options.storage=options.storage?options.storage:[];
                        options.storage.push(opt);
                    }
                    if(opt.attrib_id===colorAttID){
                        options.color=options.color?options.color:[];
                        options.color.push(opt);
                    }
                }
            return {options,...state};

        //PRODUCT_VARIATION is used to store all types of variation a product may have.
        case PRODUCT_VARIATION:
            return  {productVariation:action.payload,...state};

        //SELECTED_PRODUCT is used to store only active or selected variation of product.
        case SELECTED_PRODUCT:
                product_details=updateProductDetail({},state.attributeSelection,action.payload.product_variations);
                product_details.desc=action.payload.primary_product.desc;
                return {...state,product_details}

        //SELECTED_ATTRIBUTE is used to update the attribute sected by user and also update the selected product.
        case SELECTED_ATTRIBUTE:
            selectedItem={};
            if(action.payload.key==='Colour'){
                selectedItem.colorSelection=action.payload.id
                selectedItem.storageSelection=state.attributeSelection.storageSelection;
            } 
            if(action.payload.key==='Storage'){
                selectedItem.storageSelection=action.payload.id
                selectedItem.colorSelection=state.attributeSelection.colorSelection;
            }
            product_details=updateProductDetail(state.product_details,selectedItem,state.productVariation);
                
            return {...state,attributeSelection:selectedItem,product_details}; 

        //Handling error
        case ERROR:
            return {error:action.payload, ...state};

        //return default if no case match
        default:
            return state;
    }
}