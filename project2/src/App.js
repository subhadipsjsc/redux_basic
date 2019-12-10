import React from 'react';
import {connect} from 'react-redux'

import {updateUserAction} from './redux-elements/actions/userAction'

import './App.css';

class App extends React.Component {

  onUpdateUser = ()=>{
    this.props.onUpdateUser("subhadip updated "+Math.floor(Math.random() * 100));
  }
  render(){
    // console.log("from inside App");
    // console.log(this.props);
    return(
      <div className="App">
        <h3> Header </h3>
        <h4> {this.props.user.name} </h4>
        <button onClick={this.onUpdateUser}> Update user </button>
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
  onUpdateUser : updateUserAction
}
export default connect(mapStateToProps , mapActionToProp)(App);
