import React from 'react'
import {connect} from 'react-redux'

import {addShopProductAction} from '../redux-elements/actions/shopAction'

function secondpart(props) {
    console.log("second part rendered");

    const addShopProduct = ()=>{
        props.onUpdate_addShopProduct({ name : 'mango' , value : 5.0 });
    }

    return (
        <div>
            <br/>----------------------------------------------- <br/>
            second Part <br/><br/>

            {props.items.map( ( itm , key )=> {
             return <li key ={key}> {itm.name } || {itm.value} </li>
            })}
            <br/>
            <button onClick={addShopProduct}> Update user </button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return ({
      tax   : state.shop.taxPercent,
      items : state.shop.items
    })
  }
  
  const mapActionToProp = {
    onUpdate_addShopProduct : addShopProductAction
  }

export default connect(mapStateToProps , mapActionToProp)(secondpart);
