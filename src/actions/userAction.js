import axios from '../config/axios'

export const setUser = (user) => {
    return { type: 'SET_USER' , payload: user}
}

//Get the token and store it in local storage
export const startGetUser = () => {
    return(dispatch) => {
        axios.get('/users/account', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const user = response.data
            dispatch(setUser(user))
        })
        .catch((err) => {
            alert(err)
        })
    }
}



export const startRegisterUser = (formData,redirect) => {
    return(dispatch) => {
        axios.post('/users/register', formData)
            .then((response) => {
                //console.log(response.data)
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else {
                    alert('You have successfully register')
                    redirect()
                }
            }).catch((err) => {
                alert(err)
            })
    }
}

export const startLoginUser = (formData,redirect) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then((response) => {
                if(response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                }else {
                    alert('You have successfully logined in')
                    localStorage.setItem('authToken',response.data.token)
                    
                    axios.get('/users/account', {
                        headers: {
                            'x-auth' : localStorage.getItem('authToken',response.data.token)
                        }
                    }).then((response) => {
                        const user = response.data
                        dispatch(setUser(user))
                        redirect()
                    }).catch((err) => {
                        alert(err)
                    })
                }
            }).catch((err) => {
                alert(err)
            })
    }
}

export const startUserLogout = () => {
    return (dispatch) => {
        axios.delete('/users/logout', {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.notice) {
                alert(response.data.notice)
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href = '/'
            }
        })
        .catch((err) => {
            alert(err)
        })
    }
}