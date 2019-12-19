

export const updateuser = (name) => {
    return {
        type: 'UPDATE_USER',
        payload: {
            user: name
        }
    }
}

export const addProduct = (newProduct) => {
    return {
        type: 'ADD_PRODUCT',
        payload: {
            item: {product : newProduct}
        }
    }
}

export const change_name_actioncreater = (name) => {
    //console.log(name);
    return dispatch => {
        dispatch(updateuser(name));
        
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => { response.json() })
            .then(json => { 
                dispatch(addProduct("new_Product "+Math.floor(Math.random() * 1000) ));
                resolve("all ok");
            })
            .catch(error => { 
                reject("some error"); 
            });
        })
    }
}
