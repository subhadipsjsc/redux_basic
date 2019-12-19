export function updateUserAction (newUser){
    return {
        type: 'UPDATE_USER',
        payload : {
            user : newUser
        }
    }
}