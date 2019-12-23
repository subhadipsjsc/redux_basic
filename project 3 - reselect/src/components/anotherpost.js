import React, { Component } from 'react'
import {connect} from 'react-redux'

export class anotherpost extends Component {
  render() {   
    return (
      <div>
        <h3>Posts</h3>
        <ul>
          {this.props.posts.map ( (x,index) => {
            return(<li key ={index}> {JSON.stringify(x)} </li>)
          })}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {  
  return({
    posts : state.postListing
  })
}

export default connect(mapState) (anotherpost);





