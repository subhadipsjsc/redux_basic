import React from 'react';
import {connect} from 'react-redux'



function App(props) {
    return (
        <div>
            {props.name}
        </div>
    )
}

const mapStateToProps = (store) =>{
    return {
        name : store.user
    }
}

export default connect(mapStateToProps)(App);
