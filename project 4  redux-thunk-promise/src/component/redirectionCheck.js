import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {change_name_actioncreater} from '../redux/action'

function redirectionCheck(props) {
    let success = false;
   
    const changeName = () =>{
        props.changeName("subhadip")
        .then( success => { 
            console.log("Success Message : "+success); 
            success = true;    
        })
        .catch( err => { 
            console.log("Error Message : "+err); 
            return <Redirect to='/errorpage' />
        });
    };

    
    const items = props.products.map( (item,index) => <li key={index}>{item.product}</li> );
    
    return (
        <div>
            
            {props.name}
            
            <ul>
                {items}
            </ul>  
            
            {console.log("inside main return")}        
            
            <br></br>
            <button onClick={changeName}> change name </button>
        </div>
    )
}

const mapStateToProps = (store) =>{
    return {
        name : store.user,
        products : store.products,
    }
}

const mapDispatchToProps = {
    changeName: change_name_actioncreater
   
}


export default connect(mapStateToProps,mapDispatchToProps)(redirectionCheck);
