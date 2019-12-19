import React from 'react';
import {connect} from 'react-redux'

import {updateUserAction} from '../redux-elements/actions/userAction'
import {addShopProductAction} from '../redux-elements/actions/shopAction'


class firdspart extends React.Component {

  onUpdateUser = ()=>{
    this.props.onUpdateUser("subhadip updated "+Math.floor(Math.random() * 100));
  }

  addShopProduct = ()=>{
    this.props.onUpdate_addShopProduct({ name : 'mango' , value : 5.0 });
  }

  

  render(){
    console.log("First part rendered");
    return(
      <div className="App">
            ----------------------------------------------- <br/>
            First  Part <br/>
            <h3> Header </h3>
            <h4> {this.props.user.name} </h4>
            <br/>
            <button onClick={this.onUpdateUser}> Update user </button>
            
            <br/>
            <button onClick={this.addShopProduct}> Add product </button><br/>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return ({
    products: state.products,
    user:state.user
  })
}

const mapActionToProp = {
  onUpdateUser : updateUserAction,
  onUpdate_addShopProduct : addShopProductAction
}
export default connect(mapStateToProps , mapActionToProp)(firdspart);
