import React, { useState } from 'react'
import context from './maincontext'
const Context = ({children}) => {
    const [signUp,setSignUp]=useState({
        Name:'',
        Email:'',
        Password:''
    })
    const [login,setLogin]=useState({
        Email:'',
        Password:''
    })
    const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <context.Provider value={{signUp,setSignUp,login,setLogin,isLoggedIn,setIsLoggedIn}}>
        {children}
    </context.Provider>
  )
}

export default Context